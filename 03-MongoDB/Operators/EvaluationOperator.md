# Evaluation Operator 
## $expr
```java
//syntax
db.emp.find({$expr:{$Q_op:[{cond},{cond}]}})
// 
db.emp.find({$expr:{$lt:["$sal","$comm"]}},{ename:1,sal:1,_id:0})

//even sal 

db.emp..find({$expr:{$eq:[{$mod:["$sal",2]},0]}},{ename:1,sal:1,_id:0})

//3.disp ename and sal earning odd sal 
 db.emp.find({$expr:{$eq:[{$mod:["$sal",2]},1]}},{ename:1,sal:1,_id:0})
 
 ```

## $regex
```java 
//   regex--> /^.*a.*l{2}.*a$/
//1.name contains start s character 
db.emp.find({ename:{$regex:/.*s.*/i}},{ename:1,_id:0})
//o/p
[
  { ename: 'smith' },
  { ename: 'jones' },
  { ename: 'scott' },
  { ename: 'adams' },
  { ename: 'james' }
]

//2.name contains 2 a in job
db.emp.find({job:{$regex:/.*a.*a.*/i}},{job:1,_id:0})
//o/p
[
  { job: 'salesman' },
  { job: 'salesman' },
  { job: 'manager' },
  { job: 'salesman' },
  { job: 'manager' },
  { job: 'manager' },
  { job: 'analyst' },
  { job: 'salesman' },
  { job: 'analyst' }
]

//3.name contain 2 consecutive l
db.emp.find({ename:{$regex:/.*l{2}.*/}},{ename:1,_id:0})
//o/p
[ { ename: 'allen' }, { ename: 'miller' } ]

//4.name whoes second last caracter is e
db.emp.find({ename:{$regex:/.*e.$/}},{ename:1,_id:0})
//o/p
[
  { ename: 'allen' },
  { ename: 'jones' },
  { ename: 'turner' },
  { ename: 'james' },
  { ename: 'miller' }
]
//5.ename whoes length is 5 character 
db.emp.find({ename:{$regex:/^.....$/}},{ename:1,_id:0})
//or
db.emp.find({ename:{$regex:/^.{5}$/}},{ename:1,_id:0})
//o/p
[
  { ename: 'smith' },
  { ename: 'allen' },
  { ename: 'jones' },
  { ename: 'blake' },
  { ename: 'clark' },
  { ename: 'scott' },
  { ename: 'adams' },
  { ename: 'james' }
]



```

