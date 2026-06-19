const fs = require("fs");

// opreratioons on file and folder 
// 1. CRUD -> create read update delete 
//  append the new data to the existing one 
// get the data of one file and store in another file 
// 2. CRUD folder operations 

// ways to do the fs operations 
// 1.sync --> sync 
// 2.async --> 1.callback 2.async await 

//? Synchronus


// file operations
{
  // create
  fs.writeFileSync("app.js", "app.js file created");
  console.log("created file ");

  // update old file data
  fs.writeFileSync("app.js", "updatigng app.js"); // it will orrie the old data and add new data to the file

  fs.appendFileSync(
    "app.js",
    "\n updated new data to the app.js without orriding the old data ",
  );
  console.log("app.js updated ");

  // copying the one file data to another file
  fs.writeFileSync(
    "text.txt",
    "modules are the built in code , which is present in js  ",
  );
  console.log("text.txt created");

  //copy text.txt to module.txt
  //1.read text.txt and store in one variable
  //2.add the data in module.txt
  let data = fs.readFileSync("text.txt", "utf-8");
  fs.appendFileSync("moddule.txt", data);
  console.log("text.txt file was copied ");

  //? update
  fs.renameSync("moddule.txt", "modules.py");
  // here we can change the file   name and file extension also it will not effect the data present inside the file
  console.log("file name updated ") /
    //? delete
    fs.unlinkSync("text.txt");
  console.log("file deleted");
}

// folder operation
{
  // create folder
  fs.mkdirSync("./fsFolder");

  //creating multiple folder at a time
  fs.mkdirSync("./textFolder/node/express/js",{recursive:true});

  // create file inside folder
  fs.writeFileSync("./fsFolder/text.txt", "text file created inside fsFolder");

  // update folder name
  fs.renameSync("./fsFolder", "./fsUpfdatedFolder");

  // delete folder  // remove the js folder
  fs.rmSync("./textFolder/node/express/js",{recursive:true});

  // read content inside the folder 
  const content = fs.readdirSync('./fsUpdateFolder' , {recursive:true, withFileTypes:true})
}

 //? Asynchronus
 const fs1 = require('fs').promises
{

  //? callback 

  //writefile 
  fs.writeFile('jsp.txt','jsp file created using asynchronus ' , ()=>{
    console.log("file created ")
  })
  
  // readfile with err handling 
  fs.readFile('jsp.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
  })

  // read file and store it in another file 



  //? async await 
   
  //write file 
let createFile = async ()=>{
  await fs1.writeFile('jsp.json','{"name":"veeresh"}')
  console.log('file created')
}
createFile()
      
// READ FILE 
let readFile = async ()=>{
  try{
     let data = await fs.readFile('jsp.json','utf-8')
     console.log(data)
  }catch(err){
    console.log(err)
  }
} 
readFile()



}
