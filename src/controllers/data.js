import axios from 'axios'


export async function fetchData(req,res){
    try{
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemon}`)
        res.status(200).json(response.data)
    }catch(error){
        console.log(`Error at ${req.route.path}: ${error}`)
        res.status(500).send()
    }
}

export async function processData(req,res){
    try{
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        let randomSet = new Set()
        let requests = []
        let pokeTypeMap = {}

        //getting 25 random numbers between 0 and 100
        while(randomSet.size <= 25){
           randomSet.add(Math.floor(Math.random() * 100))
        }
        //making requests for 25 random pokemon urls
        Array.from(randomSet).forEach((index)=>{
            requests.push(axios.get(response.data.results[index].url))
        })
        //getting responses from api calls
        let responses = await Promise.allSettled(requests)
        responses
        //filtering only fulfilled reqs
        .filter((r)=>r.status === 'fulfilled') 
        //getting each pokemon's types
        .forEach((r)=>{ 
            //map type to pokemon
            r.value.data.types.forEach((type)=>{
                if(pokeTypeMap[type.type.name]){
                    pokeTypeMap[type.type.name].push(r.value.data.name)
                }
                else{
                    pokeTypeMap[type.type.name] = [r.value.data.name]
                }
            })
        })
        res.status(200).json(pokeTypeMap)
    }catch(error){
        console.log(`Error at ${req.route.path}: ${error}`)
        res.status(500).send()
    }

}