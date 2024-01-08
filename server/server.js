const express=require('express')
const router=require('./routes/routes')
const cors=require('cors')

require('./models/db')

const app=express()

app.use('/api/tasks',router)
app.use(express.json())
app.use(cors())

app.listen('8000', err=>{
    if(err) console.log(err)
    console.log('Server is start at PORT number : 8000 ');
})