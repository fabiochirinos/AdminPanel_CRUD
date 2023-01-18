const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Post', PostSchema)