# one-to-one RelationShip

```java
// create one doc in person collection
db.person.insertOne({name:"kiran" , age:22});

// create another doc in  person collection
db.person.insertOne({address : {state:"KA",city:"Banglore"}});

// create relationship bt 1st doc and 2nd one

//1st
db.person.updateOne({name:"kiran"},{$set:{personal_details:  ObjectId('69f8736d2cc585cd773682d2')}})

//aggregation
db.person.aggregate([{
    $lookup:{
        from:"person",
        localField:"personal_details",
        foreignField:"_id",
        as:"personal_details"
    }
}])


// student collection

db.student.insertMany([{name:"abc",sid:123,clgMail:"kss@gmai.com"} , {clgName:"KSS College" , fees:25000 , courses : ["javascript" , "nodeJS","mongoDB","SQL","Express"]}])

//set reference
db.student.updateOne({name:"abc"},{$set : {college :  ObjectId('69f877e0ff040370c33682d2')}})
// aggregation
db.student.aggregate([{
    $lookup:{
        from:"student",
        localField:"college",
        foreignField:"_id",
        as:"college"

    }
}])
```

# one-to-Many relationship

```java
db.person.insertOne({name:"arun",age:21})

//bank collection
db.bank.insertMany([{name:"SBI",branch:"BTM",a_no:123456},{name:"CANARA",branch:"JSP",a_no:654321},{name:"KVG",branch:"MAJESTIC",a_no:66442233}])

// create relation bt person to banks

db.person.updateOne({name:"arun"},{$set:{banks:[ ObjectId('69f9bf5fbd9f6633de3682d2'),ObjectId('69f9bf5fbd9f6633de3682d3'), ObjectId('69f9bf5fbd9f6633de3682d4') ]}})

//aggregate
db.person.aggregate([
    {
        $lookup:{
            from:"bank",
            localField:"banks",
            foreignField:"_id",
            as:"banks"
        }
    }
])
```

# Many-to-Many Relationship

```java

// create authors collection
db.authors.insertMany(
[
{
    name:"aaa",
},
{
    name:"bbb",
},
{
    name:"ccc",
}
])

 ObjectId('69f9c810bd9f6633de3682d8'),
 ObjectId('69f9c810bd9f6633de3682d9'),
 ObjectId('69f9c810bd9f6633de3682da')

//book collection
db.books.insertMany([{
    name:"node",
},{name:"js"},{name:"mongo"}])

 ObjectId('69f9c7bdbd9f6633de3682d5'), ObjectId('69f9c7bdbd9f6633de3682d6'),
 ObjectId('69f9c7bdbd9f6633de3682d7')



 //create one to many relation with autors to books
db.authors.updateOne({name:"aaa"},{$set:{books_wrote:[ObjectId('69f9c7bdbd9f6633de3682d5'), ObjectId('69f9c7bdbd9f6633de3682d6')]}})

db.authors.updateOne({name:"bbb"},{$set:{books_wrote:[ObjectId('69f9c7bdbd9f6633de3682d5')]}})

db.authors.updateOne({name:"ccc"},{$set:{books_wrote:[ObjectId('69f9c7bdbd9f6633de3682d7'), ObjectId('69f9c7bdbd9f6633de3682d6')]}})


//create many to many relation with books to authors 

db.books.updateOne({name:"node"},{$set:{
    authors:[ ObjectId('69f9c810bd9f6633de3682d8'),
 ObjectId('69f9c810bd9f6633de3682d9')]
}})

db.books.updateOne({name:"js"},{$set:{
    authors:[ ObjectId('69f9c810bd9f6633de3682d8'),ObjectId('69f9c810bd9f6633de3682da')]
}})

db.books.updateOne({name:"mongo"},{$set:{
    authors:[ObjectId('69f9c810bd9f6633de3682da')]
}})

//aggregation for authors
db.authors.aggregate([{
    $lookup:{
        from:"books",
        localField:"books_wrote",
        foreignField:"_id",
        as:"books_wrote"
    }
}])

//aggregation for books

db.books.aggregate([{
    $lookup:{
        from:"authors",
        localField:"authors",
        foreignField:"_id",
        as:"authors"
    }
}])





```
