const customerscontoller = require("../controllers/customerscontroller")

const express = require("express")
const customersrouter = express.Router()


customersrouter.post("/insertcustomers",customerscontoller.insertcustomers)
customersrouter.post("/checkcustomerlogin",customerscontoller.checkcustomerlogin)


module.exports = customersrouter