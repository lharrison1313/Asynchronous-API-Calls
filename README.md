# Asynchronous API Call Demonstration

**Steps to install dependencies and run application**
1) run `npm install`
2) run `npm run start`

**Dependencies**
- Node v20.8.1
- [express.js](https://expressjs.com/)
- [axios](https://axios-http.com/)

[**Endpoints**](./src/test.http)
- fetch-data: `/fetch-data/:pokemon`
    - description
        - fetches a pokemon from the [poke api](https://pokeapi.co/)
    - parameters
        - pokemon: the name of a pokemon
- process-data: `/process-data`
    - description
        - fetches 25 random pokemon from the [poke api](https://pokeapi.co/) and categorizes them by type
    