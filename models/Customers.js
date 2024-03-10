const mongoose = require("mongoose")

const customersschema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required:true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    confirmpassword: {
        type: String,
        required: true
      },
    location: {
      type: String,
      required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
  });

const Customers = mongoose.model('Customers', customersschema);

module.exports = Customers;