import cors from 'cors'
import 'express-async-errors'
import routes from './routes'
import './database/connection'

import errorHandler from './errors/handler'
const express = require('express')

const port = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(errorHandler)
app.use(routes)

app.listen(port, () => {
  console.log(`Server is running in ${port}`)
})
