const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  nombre: String,
  edad: {
    type: Number,
    min: 18,
    index: true
  },
  pais: String
})

module.exports = mongoose.model('User', UserSchema)