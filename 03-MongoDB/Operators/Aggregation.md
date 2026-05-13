# Aggregation

## $match:

```java
//syntax
  db.collectionName.aggregate([{stage 1},{stage 2},{stage 3}]);
```

# queries

```java
//1. ename smith
db.emp.aggregate([{$match : {ename:"smith"}}])

//2.sal = 3000
db.emp.aggregate([{$match:{sal:3000}}])

//3.not working as clerks
db.emp.aggregate([{$match:{job:{$ne:"clerk"}}}])
//4.sal < 2000
db.emp.aggregate([{$match:{sal:{$lt:2000}}}])

//5.sal less than or eq to 1500
db.emp.aggregate([{$match:{sal:{$lte:1500}}}])
//6.sal > 2500
db.emp.aggregate([{$match:{sal:{$gt:2500}}}])
//7.sal gte 3000
db.emp.aggregate([{$match:{sal:{$gte:3000}}}])

```

###  extaract day month year  from DATE

```java
// year
 db.emp.aggregate([
     {
         $addFields:{year{$year:"$hiredate"}}
     },
     {
         $match:{year:{$in:[1982,1981]}}
     }
     ,
     {
       $project:{

           ename:1,_id:0,hiredate:1,year:1
           }
     }
 ])

//month
db.emp.aggregate([
    {
        $addFields:{month:{$month:"$hiredate"}}
    },
    {
        $match:{month:12}
    }
    ,
    {
      $project:{

          ename:1,_id:0,hiredate:1,month:1
      }
    }
])
//day
db.emp.aggregate([
    {
        $addFields:{day:{$dayOfMonth:"$hiredate"}}
    },
    {
        $match:{day:17}
    }
    ,
    {
      $project:{

          ename:1,_id:0,hiredate:1,day:1
      }
    }
])
```
## $group
```
 group the similar values 
```
```
// 
db.emp.aggregate([{
   $group:{
    _id:null,
    maxSal:{$max:"$sal"},
    minSal:{$min:"$sal"},
    avgSal:{$avg:"$sal"},
    sum:{$sum:"$sal"},
    count:{$sum:1}

   }
}])
//o/p
[
  {
    _id: null,
    maxSal: 5000,
    minSal: 950,
    avgSal: 2144.6428571428573,
    sum: 30025,
    count: 14
  }
]

```
## having condition on grouped data 

```java 
 
 // 1. display  no. of empl in each dept 
 db.emp.aggregate([
    {
        $group:{
            _id:"$deptno",
            count:{$sum:1}
        }
    },
    {
        $project:{
            deptno:"$_id",
            count:1,
            _id:0
        }
    }
 ])

//2.total salary of salesman 
db.emp.aggregate([
    {

    }
])


//3.no. of managers in each dept 
db.emp.aggregate([
   {
    $match:{
        job:"manager"
    }
   },
   {
    $group:{
        _id:"$deptno",
        count:{$sum:1}

    }
   }
])

//4. no. of empl in each department atleast 4 

db.emp.aggregate([
    {
        $group:{
            _id:"$deptno",
            count:{$sum:1}
        }
    },
    {
        $match:{
            count : {$gte:4}
        }
    },
    {
       $project:{
         deptno : "$_id",
        count:1,
        _id:0
       }
    }
])

//5.








```
