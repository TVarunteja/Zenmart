const Customers = require("../models/Customers")
//to import the models

const insertcustomers = async (request, response) => {
    try 
    {
      const input = await request.body;
      const customers = new Customers(input);
      await customers.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const checkcustomerlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const customers = await Customers.findOne(input)
       response.json(customers)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

 

  module.exports = {insertcustomers,checkcustomerlogin}