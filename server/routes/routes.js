const express =require('express')
const Task=require('../models/models')

const router=express.Router()

router.get('/',(req,res)=>{
   const task=new Task({
      todo : 'Make lunch',
      isComplete : false
   })

   task.save((err,doc)=>{
      if(err) console.log(err)
      console.log(doc)
   })

}
)

module.exports=router