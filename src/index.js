import express from 'express'
import router from './routes/index'

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
const port = 3001
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
