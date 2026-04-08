const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1/:27017/mernAuth") // HTML link , MongoDB localhost , Database name
.then(()=> console.log("MongoDB Coonected")
)
.catch((err)=> console.log(err)
)

// Data Fetching
const userSchema = new mongoose.Schema({ // Structure for user documents
    email: String, 
    name: String,
    password: String,
    contactNo: Number
})

// Store data
const User = mongoose.model("users" , userSchema)

// Middleware
app.use(express())
app.use(cors()) // enable CORS, allowing frontend (different origin) to make request use as a blockers

// SignUp API

app.post("/signup" , async(req , res) => {
    const {email , name , password , contactNo} = req.body;

    const users = new User({email , name , password , contactNo}) // For new user
    await users.save()

    // Response message
    res.json({message: "User Registered"})
})

// Login API