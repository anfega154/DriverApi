//here put code for dara base connection

const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/chuber'


mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error connection'))
db.once('open', () => {
  console.log("conected to MongoDB!")
})
module.exports = db