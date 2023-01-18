const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      //must add in order to not get any error masseges:
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`mongo database is connected!!!`)
  } catch (error) {
    console.error(`Error: ${error} `)
  }
}

module.exports = connectDB