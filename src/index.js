import express from 'express'
import DataRouter from './routes/data.js'
const app = express()
const port = 8080


app.use(DataRouter)

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})