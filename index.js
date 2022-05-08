const express =require('express')
const mongoose=require('mongoose')
const Person = require('./model/Person')
require ('dotenv').config()
const app =express()


const PORT =process.env.PORT
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI)

.then(()=>console.log('DATABASE CONNECTED SUCCESSFULY'))
.catch((err)=>console.log(err))

// let  test= Person.create({
//     name : "thouraya",
//     age :'23',
//     favoriteFoods:['koskous', 'libanais']


// } ,
// async (err,data)=>{
//     if (err) throw err
//     await console.log(data)
// })

//create Many

let arrayOfPeople = [
    {name: "mahrez ounissi", age: 20, favoriteFoods: ["lasagne"]},
    {name: "ibtissem ounissi", age: 25, favoriteFoods: ["makloub"]},
    {name: "teysir ounissi", age: 15, favoriteFoods: ["Kafteji"]} 
  ];
   let teste = Person.create(arrayOfPeople, async (err, data) => {
    if (err){console.log(err)}
    await console.log(data)
  
  } )
      //find
  
         let testee=Person.find({"name": "mahrez ounissi"}, async(err,data)=>{
         if(err) throw console.log(err)
          await console.log(data)
            })  
          
        //find one  
        
           let one =Person.findOne({ favoriteFood: "pizza" }, async(err, data) => {
            if (err) throw console.log(err);
           await console.log (data);
         });
          //findbyid
  
          let id="6276cd6b16f5f221d3050943"
          let ff = Person.findById({_id: id }, async(err,data)=>{
           if(err)throw err
            await console.log(data)
         })
          //modifier 
          const foodToAdd = "tacos";
    Person.findById({_id:id}, async(err, data) => {
      if (err) throw (err);
      await data.favoriteFood.push(foodToAdd);
      data.save(async(err, data) =>
         err
          ? console.error("error saving data: ", err.message)
          : await console.log(data)
     );
    })
    //update age
    const ageToSet = 24;
  
    let age =  Person.findOneAndUpdate(
      { "name": "thouraya" },
      { $set: { "age": ageToSet } },
      { new: true },
      async(err, data) => (err ? async(err, data) : console.log(data))
   );      
        //delete
        let dd ="6276cca1ea684c6a5bdb62e3"
         let sup = Person.findByIdAndRemove({_id:dd}, async(err, data) =>
        err ? async(err, data) : await console.log(data)
      ); 
  //removemany
  
  const nameRemove = "mary ";
    let rem = Person.remove({ name: nameRemove }, async(err, data) =>
      err ? async(err, data) : await console.log (data)
    );
  

   app.listen(PORT , ()=>{
       console.log('server is running on port 5000')
   })
  