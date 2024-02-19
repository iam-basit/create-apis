const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost:27017/firstDB')
  .then(() => {
    console.log('Database Connected!')
  })
  .catch(() => {
    console.log('Unable to Connect with Database!')
  })
