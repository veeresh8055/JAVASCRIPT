# Array Operator 
```we use these operators on array of values ```

### all
### elemMatch
### size

## $all
```java
$all accespt array  of args and acts like $AND operator ,  only all the values are avialable then only it will give the elem 
// display ename skills who have node js in there skill
db.emp.find({skils:{$all:["node","js"]}},{ename:1,_id:0,skils:1}) 

//o/p
[
  {
    ename: 'smith',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  },
  {
    ename: 'allen',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  },
  {
    ename: 'ward',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  },
  {
    ename: 'martin',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  }
]

```
## $elemMatch
```java 
//display ename and skills who have atleast nodejs or js as therit skills 
db.emp.find({skils:{$elemMatch:{$in:["node","js"]}}},{ename:1,_id:0,skils:1})
//o/p
[
  {
    ename: 'smith',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  },
  {
    ename: 'allen',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  },
  {
    ename: 'ward',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  },
  {
    ename: 'martin',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  }
]

//3.display ename and whoes marks a gte than 60 

```
## $size 
```java
// we can access accoreing to the size we give , exactly how many values in array we want 

//1.display ename and skills who have exactly 4 skills in there skils field
db.emp.find({skils:{$size:6}},{ename:1,skils:1,_id:0})
//o/p
[
  {
    ename: 'smith',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  },
  {
    ename: 'allen',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  },
  {
    ename: 'ward',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  },
  {
    ename: 'martin',
    skils: [ 'js', 'css', 'html', 'node', 'react', 'express' ]
  }
]

```
## Cursors
``` java 
//.sort(ename:1) --> ascending order
//.limit(val)   --> limit on docs
//.skip(vale)  --> skipping docs 
//.count()  --> count the no of docs 
//.forEach  --> loop trough all docs 


 db.emp.find({},{ename:1,sal:1,_id:0}).sort(ename:1).limit(2).skip(2)

//forEach 
db.emp.find({},{ename:1,sal:1,_id:0}).forEach(el=>print(el))

db.emp.find({},{ename:1,sal:1,_id:0}).forEach(printjson)
```