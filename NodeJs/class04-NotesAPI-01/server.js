const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World ");
});
// get post put patch delete [use (builtin middleware)]

//middleware
app.use(express.json());

const notes = [];

// taking data from frontend
// to get notes --> title and description
app.post("/notes", (req, res) => {
  console.log(req.body); //{ title: 'test_title', description: 'test_description' }
  notes.push(req.body);

  res.json({
    message: "Title send successfully",
    notes: notes,
  });
});

//sending data to frontend
app.get('/notes' ,(req,res)=>{
    res.json(notes)
})

//DELETE  /notes/:index
app.delete('/notes/:id',(req,res)=>{
    const index = req.params.id
    delete notes[index]
    res.json({
        message : "Notes deleted successfully",
        notes : notes
    }) 
})

// patch [to update data which is in server ]
app.patch('/notes/:id' ,(req,res)=>{
    const index = req.params.id;
   const {title} = req.body
    notes[index].title = title;
    res.json({
        message:"Message Update successfully",
        notes:notes
    }) 
})

app.listen(3000, () => {
  console.log("Server Started..!");
});
