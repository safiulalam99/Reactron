import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'
import cors from 'cors'

import timeSheetRouter from './routers/timeSheet'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use(cors())

// Global middleware
app.use(apiContentType)
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))
// Set up routers
app.use('/api/v1/timeSheet', timeSheetRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
