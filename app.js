const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./database/db')


//Seteamos las variables de entorno
dotenv.config({ path: './env/.env' })

const app = express()
const port = process.env.PORT || 3000;

//MongoDB Altas conexion
connectDB()

//AdminBro
const AdminBro = require('admin-bro')
const expressAdminBro = require('@admin-bro/express')
const mongooseAdminBro =  require('@admin-bro/mongoose')

//Modelos
const User = require('./models/User')
const Post = require('./models/Post')

AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {resources: [User, Post]}

const adminBro = new AdminBro(AdminBroOptions)
const router = expressAdminBro.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)


app.get('/', (req, res) => {
  res.send('Dashboard con Node')
})


app.listen(port, () => {
  console.log('Server up running in http://localhost:3000/admin');
})