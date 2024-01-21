import {Router} from 'express'
import { fetchData, processData } from '../controllers/data.js'
const DataRouter = Router()

DataRouter.get('/fetch-data/:pokemon', fetchData)
DataRouter.get('/process-data', processData)

export default DataRouter