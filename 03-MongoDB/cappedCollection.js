// creating a capped collection in monogoDb 

db.createCollection("user" , {capped:true , max:5 , size:10000})

db.user.insertMany([{name:"veeresh" , age:22},{name:"kiran" ,age:22}])

// if we try to insert more than max elements the first document removed from the database and the new one added to the database 
// It follow first in first out [FIFO]

