# MONGODB

## sql  v/s    nosql
rdbmas 
--dbms

structured query langauage 
--non structured querylang 

it store data in the form of table wit rows and colm
--it stores the data in the collection wit documents 

it as static or fixed schema 
--ithas dynamic or schmea less

it supports JOINS
--It does not support JOINS

it follows vertical scaling
--it follows horizontal scaling 

it support ACID Properties 
--it does not support acid properties

eg:oracleSQL postrgrSQL 
--eg:mongoDB Cassandra radies couchDB etc 

## NOSQL Database
``` java
noSQL is a database management system that is designed to until the large amount of data in structured or semistructured way 
```

## ACID PROPERTIES
```javascript
A -> (Automicity): it is responsible for the entire transaction takes place at once or does not happen at all

C -> (Consistency): the database must be consistent before and after the transaction

I ->(Isolation):multiple transactions takes place independently without any interference 

D ->(Durability): the changes of successful transsaction occurs even if the system failure occurs 
```

## Horizontal Scaling
```java
It is a process of adding extra resources to te old resources
```
## Verticle Scaling
``` java 
It is a process of replacing the entire resources with new resources 
```

# MongoDB
```java
MOngoDB is opnesource cross platform distributed and schemaless nosql database 
It stores data in the form of JSON Documents or BSON
doc 
MongoDB is Best choice for Huge amount of data 

```
## History 
```java
MongoDB is introduced by Three persons 
1.Dwite Merriment
2.Eliote D
3.Kevin ryan 

who were working in a company 'doubleClick'

they fonded it in 2007 and released te first version (mongoDB 1.0) in the year 2009

```
## MongoDB Architecture
```java 
|---------|
|JONS DOC |
|---------|
     |
     |
|-----------|
|mongoShell |
|(MOZJS)    |
|-----------|
     |
     |
|----------------|
|monogodb storage|
|engine          |
|(WiredTIger)    |
|----------------|
     |
     |
|------------|
|  BSON doc  |
| {JSON doc} |
|------------|

```
## Advantages
```java
* Can store Huge Amount of data 
* It is shema less
* Extremly faster than RDBMS
* Suitable for developing web and mobile application
* No complex queries like JOINS
* Structure of single document is clear 
```
## Documents
```java
* docs are nothing but a set of key value pair 
* these are represented by curly braces {}
* the max size of each doc is 16 MB
* the same field in the different document can hold diff datatype 
* Doc dont have fixed schema 
  eg: Collection
      {name:"kiran",age:22,marks:99.99}
      {name:""veeresh,age:22"}  
```
## Collection
```java
* collection is nothing but group of documents 
* collection exist withing the database
* It is almost similar to the RDBMS table 
* We can store n number doc in One collections 
* collections has dynamic schema which means no fixed length by default 
```
## Capped Colection
```java
If we want to restrict the size of collection to particular number of doc then we will create a capped collection 

* fixed collections are also called as capped collections 

* If we are creating capped collection then is mandatory to specify the number of doc to be allowed , capped:true and size of each doc

//syntax to create capped Collection
db.createCollection("collectionName",{capped:true,max:10,size:10000})
```
## ObjectID 
```java
* Object ID is generated automatically by the mongoDB while inserting the documents 

* It acts like a primary key for the documents 

* This Object ID is always a unique twelveByte hexadecimal String
this twelve bytes are divided into 3 types 
12Bytes
-- 4 byte -->TimeStamps
-- 5 byte -->Random Values
-- 3 byte --> Increment

* we can override the object id but it is not recommended 
* by giving (_id :1)  we can override the Object ID given by MOngoDB 
```
## Basic Commands of MongoDB 
```java
* Create :
// to create database DB 
        use DBName
        use Jspider  
 use : this commad will perform two actions 
        1.if databse does not exist then it will create new database and it will switc to that databse 
        2.If database alreay exists then it will switch to tat databse without creating new Database

 //to create Collection
       db.createCollection("collectionName")
       db.createCollection("Laptops")
       db.createCollection("Students")
     (it is also called as explicit way of creating a collection)

* Insert :
//to insert Data 
  we have two methods 
  1.insertOne()
  2.insertMany([])

  //syntax
  db.collectionName.insertOne({key:value})
  db.student.insertOne({name:"veeresh",age:22})

  db.collectionName.insertMany([{key:value} ,{key:value}])
  db.student.insertMany([{name:"kohli",age:33},{name:"dhoni",age:44}])

* Read :

// to see/read/shows/know all databases
  -->  show dbs  
// to know curr DB 
  --> db 
// to know all collections inside te databse 
  --> show collections /  show tables
// to read data 
  -->1.db.collectionName.findOne({cond})
  -->2.db.collectionName.find({cond})

```
### diff between findOne and find()
* it always return one docment 
---*It return one or more than one document 

* without condition it returns first ocument of collection ---* it return all doc of collections

* with condition it returns  first matching document ---* returns all te matching documents 

* on empty collection returns 'null' ---* it return empty blank space 

## Cursors

### sort()
```java
```

### skip(val)
```java
```

### limit(val)
```java
limit method is used to limit the no. of documents to be display in the output 
eg:
 db.emp.find({},{ename:1,_id:0}).limit(2);

* we can use the combination of all above three methods depends on our requirements 

eg:
 db.emp.find({},{ename:1,sal:1,_id:0}).sort({sal:1}).skip(2).limit(2)

```
### count()
```java
it returrns the no. of documents present in the collection or the no. of documents or satisfying the specified the condition.

eg:
//count all the document  in the emp collection
db.emp.find().count();//14 


```
### forEach()
```java 
if we want to return total no. of documents in the collection or to print the output in json format  we will use forEach 
it accepts on callback function 

//display documents in json format
db.emp.find().forEach(printjson)
   //or 
db.emp.find().forEach((e)=>print(e))
```
# 
#

# UPDATE OPERATORS
 * we have two method to perform updatation 
 * 1.updateOne( {condition} , {updation} )
 * 2.updateMany( {condition} , {updation} )

## types of update operator
 * $inc
 * $max
 * $min
 * $


### $inc
```java
used to increase the specified value by adding it to the current value 
it works only on numbers
it accepts positive or negative numbers 

//increase sal of smith by 1000 
db.emp.find({ename:smith},{$inc:{sal:1000}})

//decrease sal of smith by 1000 
db.emp.find({ename:smith},{$inc:{sal:-1000}})

```
## NOTE : common cases for all update Operator
### case 1:
``` 
when the condition is true but the field is not avilabel in document then update operator will create  new field with specified value in that particular documents based on the  specified condition

//cond is matching but  field in not avilab
updateMAny({ename:"smith"},{$inc:{salary : 1000}})
```
### case 2:
```java
when the condition is false but we have passing the third argument as '{upsert:true}'
then update operator will create new document with the specified condition and updation and insert at the last in the collection 

//condition false but using {upsert:true} as 3rd argument 
db.emp.updateMany({ename:"kiran"},{$inc:{sal:1000}},{upsert:true})

* add new doc with {ename:"kiran" ,sal:1000}
```

### $max
```java
max operator updates the value to the maximum value only when te specified value is greater than current value otherwise it will do nothing 


specified value > curr value
// smith sal is maximum 1000 if less make max other wise do nothing 
db.emp.updateMany({ename:"smith"},{$max:{sal:1000}})

* it works only on nummbers 
```
### $min
```java 
it updates value to the minimum only when the specified value is less than current value 

* min op works only on numbers 

specified value <  current value 
// smith sal is minimum 800 if greater make min other wise do nothing 
db.emp.find({ename:"smith"},{$min:{sal:800}})

```

### $mul
```java 
this operator is used to multiply the value of field with specifed number 
it also works on number data types 

// increate smith sal * 2 
db.emp.updateMany({ename:"smith"},{$mul:{sal:2}})

NOTE : only the mul operator whic sets the value of field  to 0 when the field in not avilable in the documnets 

//condition false
db.emp.updateMany({ename:"kiran"},{$mul:{sal:2}})
-> * add new doc with {ename:"kiran" ,sal:0}


```

### $set
```java
it is  most imp recommended operator update operator 
it works with all kind of data types

eg:
//update smith job as a SALESMAN
db.emp.updateMany({ename:"smith"},{$set:{job:"salesman"}})

//update smith sal to 1500 and depatment no 20 
db.emp.updateOne({ename:"smith"},{$set:{sal:1500 , deptno:20}})

```
### $unset 
```java 

this operator is used to delete the field fom the documents 
do delete field  of doc we have to pass { feildname:"" }

// delete salary field  of smith 
db.emp.updateMany({ename:"smith"},{$unset:{salary:""}})
```
### $rename
```java
this operator is used to rename the fields 
to rename the field name we have to pass {oldfieldName:"newfieldName"}

//rename the job into designation on emp collection 
db.emp.updateMany({},{$rename:{job:"designation"}})

```
#

# SCHEMA DESIGNING 