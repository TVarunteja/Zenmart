const Customers = require("../models/Customers")
const Admin = require("../models/Admin")


 const viewcustomers = async (request, response) => 
 {
    try 
    {
      const customers = await Customers.find();
      if(customers.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(customers);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  

  const deletecustomer = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const customers = await Customers.findOne({"email":email})
      if(customers!=null)
      {
        await Customers.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

  module.exports = {viewcustomers,deletecustomer,checkadminlogin}

  //modules - controller- routes- Server.js
  //there are two class Admin and JobSeeker