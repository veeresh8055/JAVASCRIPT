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


