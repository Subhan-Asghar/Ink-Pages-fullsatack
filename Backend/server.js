const express = require('express')
const cors=require('cors')
const mongoose = require('mongoose');
const app = express()
const port = 3000
//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

//CORS
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})