const Info = require('./../Model/model');



const addNewMessage = async (req,res) =>{
    const {name , email, message} = req.body;

   if(!name || !email || !message ){
       res.status(400);
       throw new Error("Please Enter all the Fields");
   }
 
       const newMessage = await Info.create({
           name:name,
           email:email,
           message:message,
       });

   if(newMessage){
       res.status(201).json({
           _id:newMessage._id,
           name:newMessage.name,
           email:newMessage.email,
           message:newMessage.message,
       })
   }else{
       res.status(400);
       throw new Error("Failed to upload the image");
   }
}

module.exports = {addNewMessage}