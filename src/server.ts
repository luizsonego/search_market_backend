import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import routes from './routes'
import './database/connection'

import errorHandler from './errors/handler'

const port = 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(errorHandler)
app.use(routes)

// app.listen(process.env.PORT || 3001)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
