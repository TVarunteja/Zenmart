const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

//admin routes

adminrouter.get("/viewcustomers",admincontroller.viewcustomers)
adminrouter.delete("/deletecustomer",admincontroller.deletecustomer)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)

module.exports = adminrouter