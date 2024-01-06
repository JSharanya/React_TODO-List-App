const express=require('express')
const router=require('./routes/routes')

require('./models/db')

const app=express()

app.use('/api/tasks',router)

app.listen('8000', err=>{
    if(err) console.log(err)
    console.log('Server is start at PORT number : 8000 ');
})