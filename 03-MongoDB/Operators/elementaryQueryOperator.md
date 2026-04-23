# Elementary query Operator
* $exists
* $type

```java
//$exists
//1.display ename sal who have  deptno
db.emp.find({deptno:{$exists:true}},{ename:1,sal:1,_id:0})
//output
[
  { ename: 'smith', sal: 800 },
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'jones', sal: 2975 },
  { ename: 'martin', sal: 1250 },
  { ename: 'blake', sal: 2850 },
  { ename: 'clark', sal: 2450 },
  { ename: 'scott', sal: 3000 },
  { ename: 'king', sal: 5000 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'james', sal: 950 },
  { ename: 'ford', sal: 3000 },
  { ename: 'miller', sal: 1300 }
]

```
## $type
* it is used to compare the datatype 
```java
//1.display emp det where sal store as number 
db.emp.find({sal:{$type:'int'}},{ename:1,sal:1,_id:0})

db.emp.find({sal:{$type:16}},{ename:1,sal:1,_id:0})
//output
[
  { ename: 'smith', sal: 800 },
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'jones', sal: 2975 },
  { ename: 'martin', sal: 1250 },
  { ename: 'blake', sal: 2850 },
  { ename: 'clark', sal: 2450 },
  { ename: 'scott', sal: 3000 },
  { ename: 'king', sal: 5000 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'james', sal: 950 },
  { ename: 'ford', sal: 3000 },
  { ename: 'miller', sal: 1300 }
]

