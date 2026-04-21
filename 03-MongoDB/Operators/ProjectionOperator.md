# Projection Operator
projection operator are we use  as second arg in find method 

##  Queries 
```Javascript
//1.display ename and job of a employee job is salesman
db.emp.find({job:"salesman"},{ename:1,job:1,_id:0})

//output
[
  { ename: 'allen', job: 'salesman' },
  { ename: 'ward', job: 'salesman' },
  { ename: 'martin', job: 'salesman' },
  { ename: 'turner', job: 'salesman' }
]

//2.display enma sal job whoes salary is 1600 3000 5000
db.emp.find({sal:{$in:[1600,3000,5000]}} , {ename:1,job:1,sal:1,_id:0})

//output
[
  { ename: 'allen', job: 'salesman', sal: 1600 },
  { ename: 'scott', job: 'analyst', sal: 3000 },
  { ename: 'king', job: 'president', sal: 5000 },
  { ename: 'ford', job: 'analyst', sal: 3000 }
]

//3.salary = 3000 ename and sal 
db.emp.find({sal:3000},{ename:1,sal:1,_id:0})

[ { ename: 'scott', sal: 3000 }, { ename: 'ford', sal: 3000 } ]

//4.not working as clearks ename and job
db.emp.find({job:{$nin:["clerks"]}},{ename:1,job:1,_id:0})

[
  { ename: 'smith', job: 'clerk' },
  { ename: 'allen', job: 'salesman' },
  { ename: 'ward', job: 'salesman' },
  { ename: 'jones', job: 'manager' },
  { ename: 'martin', job: 'salesman' },
  { ename: 'blake', job: 'manager' },
  { ename: 'clark', job: 'manager' },
  { ename: 'scott', job: 'analyst' },
  { ename: 'king', job: 'president' },
  { ename: 'turner', job: 'salesman' },
  { ename: 'adams', job: 'clerk' },
  { ename: 'james', job: 'clerk' },
  { ename: 'ford', job: 'analyst' },
  { ename: 'miller', job: 'clerk' }
]

//5.salary less than 2000 ename and sal 
db.emp.find({sal:{$lt:2000}},{ename:1,sal:1,_id:0})

[
  { ename: 'smith', sal: 800 },
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'martin', sal: 1250 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'james', sal: 950 },
  { ename: 'miller', sal: 1300 }
]

//5.sal less than or equal to 1500 ename and sal
db.emp.find({sal:{$lte:1500}},{ename:1,sal:1,_id:0})

[
  { ename: 'smith', sal: 800 },
  { ename: 'ward', sal: 1250 },
  { ename: 'martin', sal: 1250 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'james', sal: 950 },
  { ename: 'miller', sal: 1300 }
]

//6.sal gt 2500 ename and sal
db.emp.find({sal:{$gt:2500}},{ename:1,sal:1,_id:0})

[
  { ename: 'jones', sal: 2975 },
  { ename: 'blake', sal: 2850 },
  { ename: 'scott', sal: 3000 },
  { ename: 'king', sal: 5000 },
  { ename: 'ford', sal: 3000 }
]

//7.sal gte 3000 ename and sal
db.emp.find({sal:{$gte:3000}},{ename:1,sal:1,_id:0})

[
  { ename: 'scott', sal: 3000 },
  { ename: 'king', sal: 5000 },
  { ename: 'ford', sal: 3000 }
]
//8.ename and dep belongs to 10 or 20 
db.emp.find({deptno:{$in:[10,20]}},{deptno:1,ename:1,_id:0})

[
  { ename: 'smith', deptno: 20 },
  { ename: 'jones', deptno: 20 },
  { ename: 'clark', deptno: 10 },
  { ename: 'scott', deptno: 20 },
  { ename: 'king', deptno: 10 },
  { ename: 'adams', deptno: 20 },
  { ename: 'ford', deptno: 20 },
  { ename: 'miller', deptno: 10 }
]
//9.ename and dept not belongs to 30 
db.emp.find({dept:{$nin:[30]}},{ename:1,deptno:1,_id:0})

[
  { ename: 'smith', deptno: 20 },
  { ename: 'allen', deptno: 30 },
  { ename: 'ward', deptno: 30 },
  { ename: 'jones', deptno: 20 },
  { ename: 'martin', deptno: 30 },
  { ename: 'blake', deptno: 30 },
  { ename: 'clark', deptno: 10 },
  { ename: 'scott', deptno: 20 },
  { ename: 'king', deptno: 10 },
  { ename: 'turner', deptno: 30 },
  { ename: 'adams', deptno: 20 },
  { ename: 'james', deptno: 30 },
  { ename: 'ford', deptno: 20 },
  { ename: 'miller', deptno: 10 }
]

//10. ename job sal job is manager 
db.emp.find({job:"manager"},{ename:1,job:1,sal:1,_id:0})

[
  { ename: 'jones', job: 'manager', sal: 2975 },
  { ename: 'blake', job: 'manager', sal: 2850 },
  { ename: 'clark', job: 'manager', sal: 2450 }
]

//11.sal not eq to 3000 name and sal 
db.emp.find({sal:{$nin:[3000]}},{ename:1,sal:1,_id:0})
[
  { ename: 'smith', sal: 800 },
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'jones', sal: 2975 },
  { ename: 'martin', sal: 1250 },
  { ename: 'blake', sal: 2850 },
  { ename: 'clark', sal: 2450 },
  { ename: 'king', sal: 5000 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'james', sal: 950 },
  { ename: 'miller', sal: 1300 }
]


//12.name and empno empno is gt 7800
db.emp.find({empno:{$gt:7800}},{ename:1,empno:1,_id:0})

[
  { empno: 7839, ename: 'king' },
  { empno: 7844, ename: 'turner' },
  { empno: 7876, ename: 'adams' },
  { empno: 7900, ename: 'james' },
  { empno: 7902, ename: 'ford' },
  { empno: 7934, ename: 'miller' }
]
//13.lte 7654 name and empno 
db.emp.find({empno:{$lt:7654}},{ename:1,empno:1,_id:0})
[
  { empno: 7369, ename: 'smith' },
  { empno: 7499, ename: 'allen' },
  { empno: 7521, ename: 'ward' },
  { empno: 7566, ename: 'jones' }
]

```
---
# Collections:

