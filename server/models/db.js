const mongoose=require('mongoose')

mongoose.set('strictQuery', false);

  module.exports= mongoose.connect('mongodb://localhost:27017/todolist',{
    //   useUnifiedTopology:true,
    //   useNewUrlParser:true,
    //   useFindAndModify:false
  },err=>{
      if(err) console.log(`Error in DB Connection ${err}`)
      console.log('MongoDB Connection Suceeded........')
  })

//  module.exports= async()=>{
//      try{
//          mongoose.set('strictQuery',false)
//          mongoose.connect("mongodb://localhost:27017/todolist")
//          console.log("MongoDB Connection Suceeded........")

//      }catch(error){
//          console.log(error)
//          process.exit()
//      }
//  }

// module.exports= mongoose.connect('mongodb://localhost:27017/todolist',{
//     useUnifiedTopology:true,
//     useNewUrlParser:true,
//     useFindAndModify:false
// },).then(()=>console.log("MongoDB Connection Suceeded........"))
// .catch((err)=>{console.error(err);});

