// create database 
use databaseName 

// create collection 
db.createCollection("CollectionName")

//display all dbs 
show dbs

//show all collection
show collections


// inserting the  documents in the collections
// two methods to insert value 
//1.insertOne()
//2.insertMany([{},{}])

//1.insertOne()
db.collectionName.insertOne({name:"veeresh",age:22})

//2.insertmany([{},{}])
db.collectionName.insertMany([
    {
        name:"veeresh",
        age:22
    },
    {
        name:"kiran",
        age:22
    }
])
