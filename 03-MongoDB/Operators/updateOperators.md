# Update Operator 
## $inc
```java 
//add 1000 to smith salary 
db.emp.updateMany({ename:"smith"},{$inc:{sal:1000}})

//update smith salary to 1000 and comm 100
db.emp.updateMany({ename:"smith"},{$inc :{sal:-800}})
db.emp.updateMany({ename:"smith"},{$inc :{sal: null}) // error 

//common case for all update operators
//1.cond is true , field is not available --> it add that field to that document 

//2.cond is false and the field is true  --> nothing will update 

//3.cond is false and the field is not avialbele and 3rd arg {upsert:true} --> it add new document the document 
```
## $max
```java
//the specified value  > curr value then only te data val is update 
```
## $min
```java
//the specified value  < curr value then only te data val is update 
```
## $set
```java 
//set operator is used to update all type of data 
```
## $unset 
```java
//unset operator is used to delete te field 
db.emp.updateMany({ename:"smith"},{$unset:{salary:""}}) //or
db.emp.updateMany({ename:"smith"},{$unset:{salary:0}})
```
## $rename
```java
//rename is used to rename the field name 
db.emp.updateMany({ename:"smith"},{$rename:{sal:"earnings"}})

```