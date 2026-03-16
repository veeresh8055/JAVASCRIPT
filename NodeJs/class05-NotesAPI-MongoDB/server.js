const express = require('express');

const app = express()
app.get('/',(req,res)=>{
  res.send('Home Page..!')
})
// post[to get data from frontend] get[to give data to frontend from server] delete[delete the data in tha server] patch[update the data in server ] 

const notes = [];

app.use(express.json())
// post 
app.post('/notes',(req,res)=>{
  console.log(req.body)
  notes.push(req.body)
  res.json({
    message : 'Message succeffully added'
    ,notes:notes
  })
})

//get 
app.get('/notes',(req,res)=>{
  res.json({
    message:'Notes messages',
    notes:notes
  })
})

//delete
app.delete('/notes/:id',(req,res)=>{
  let index = req.params.id;
  delete notes[index]
  res.json({
    message:"Notes deleted ",
    notes:notes
  })

})

//update 
app.patch('/notes/:id',(req,res)=>{
  let index = req.params.id;
  let {title} = req.body;

  notes[index].title = title;
  res.json({
    message:"updated successfully",
    notes:notes
  })
})


app.listen(3000,()=>{
  console.log("Server started in port 3000")
})