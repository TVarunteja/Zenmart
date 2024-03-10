const express = require("express")
const mongoose = require("mongoose")

const cors = require("cors") 
const dburl="mongodb://localhost:27017/ZenMart"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
   console.log(err.message) 
});

const app = express()
app.use(express.json()) // to parse json data
app.use(cors())

const  adminrouter = require("./routes/adminroutes")
const customerrouter = require("./routes/customerroutes")

app.use("",adminrouter) // it includes (all)admin routes
app.use("",customerrouter) //it includes jobseeker routes

const port=2000
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})