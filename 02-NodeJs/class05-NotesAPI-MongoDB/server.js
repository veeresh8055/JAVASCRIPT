const express = require("express");
const connToDB = require("./src/db/db.js");
const noteModel = require("./src/models/note.model.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

// creating a notes 
app.post("/notes", async (req, res) => {
  //title and content extractig from req.body 
  const { title, content } = req.body;
 
  //consoling title and content 
  console.log(title, content);

  //creating a doc in out note database trough noteModel 
  await noteModel.create({
    title , content
  })

  const notes =await  noteModel.find()
  //response 
  res.json({
    message: "Note created successfully ",
    notes
  });
});

// reading a note
app.get("/notes",async (req,res)=>{
  const notes = await noteModel.find();

  res.json({
    message:"Notes find successfully ",
    notes
  });
});

//deleting a note from databse 
app.delete("/notes/:id",async (req,res)=>{

  //getting id of the notes using params 
  const key = req.params.id

  //deletng the notes by using id 
  await noteModel.findOneAndDelete({
    _id:key 
  })

  // notes awailable after deliting
  const notes = await noteModel.find();
  //response
  res.json({
    message:"deleted successfully ",
    notes
  });
});

//updating the notes 
app.patch("/notes/:id",async (req,res)=>{
  const key = req.params.id;
  const {title} = req.body;

  await noteModel.findOneAndUpdate({
    _id:key
  },{
    title:title
  });

  const updatedNote = await noteModel.findOne({_id:key})
  res.json({
    message:"updated successfully ",
    updatedNote
  })
})





const PORT = process.env.PORT;

async function startServer() {
  await connToDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

startServer();
