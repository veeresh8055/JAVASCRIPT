```java
//1.
db.emp.find({$or:[{sal:{$gt:2000}},{comm:{$exists:true}}]})

//2.not in dept 10 20 

//3.Hired in 1981
db.emp.find({hiredate:{$gte:new Date("1981-01-01"),$lte:new Date("1981-12-31")}},{_id:0,hiredate:1,ename:1})
//output
[
  { ename: 'allen', hiredate: ISODate('1981-01-20T00:00:00.000Z') },
  { ename: 'ward', hiredate: ISODate('1981-02-22T00:00:00.000Z') },
  { ename: 'jones', hiredate: ISODate('1981-04-02T00:00:00.000Z') },
  { ename: 'martin', hiredate: ISODate('1981-09-28T00:00:00.000Z') },
  { ename: 'blake', hiredate: ISODate('1981-05-01T00:00:00.000Z') },
  { ename: 'clark', hiredate: ISODate('1981-06-09T00:00:00.000Z') },
  { ename: 'king', hiredate: ISODate('1981-11-17T00:00:00.000Z') },
  { ename: 'turner', hiredate: ISODate('1981-09-08T00:00:00.000Z') },
  { ename: 'james', hiredate: ISODate('1981-12-03T00:00:00.000Z') },
  { ename: 'ford', hiredate: ISODate('1981-12-03T00:00:00.000Z') }
]

// Display ename, hiredate of employees who were hired in 1982 - 1985
db.emp.find({hiredate:{$gte:new Date("1982-01-01"),$lte:new Date("1985-12-31")}},{ename:1,hiredate:1,_id:0})
//output
[ { ename: 'miller', hiredate: ISODate('1982-01-23T00:00:00.000Z') } ]

// 1. Display ename, salary of employees whose salary is greater than 2500
db.emp.find({sal:{$gt:2500}},{ename:1,sal:1,_id:0})
//o/p
[
  { ename: 'jones', sal: 2975 },
  { ename: 'blake', sal: 2850 },
  { ename: 'scott', sal: 3000 },
  { ename: 'king', sal: 5000 },
  { ename: 'ford', sal: 3000 }
]


// 2. Display ename, job of employees who are salesman OR salary less than 1200 
db.emp.find({$or:[{job:"salesman"},{sal:{$lt:1200}}]},{ename:1,job:1,sal:1,_id:0})
//o/p
[
  { ename: 'smith', job: 'clerk', sal: 800 },
  { ename: 'allen', job: 'salesman', sal: 1600 },
  { ename: 'ward', job: 'salesman', sal: 1250 },
  { ename: 'martin', job: 'salesman', sal: 1250 },
  { ename: 'turner', job: 'salesman', sal: 1500 },
  { ename: 'adams', job: 'clerk', sal: 1100 },
  { ename: 'james', job: 'clerk', sal: 950 }
]

// 3. Display ename, salary, deptno of employees whose salary is in (800, 1500, 3000)
db.emp.find({sal:{$in:[800,1500,3000]}},{ename:1,sal:1,deptno:1,_id:0})
//o/p
[
  { ename: 'smith', sal: 800, deptno: 20 },
  { ename: 'scott', sal: 3000, deptno: 20 },
  { ename: 'turner', sal: 1500, deptno: 30 },
  { ename: 'ford', sal: 3000, deptno: 20 }
]

// 4. Display ename, job of employees whose job is not manager 
 db.emp.find({job:"manager"},{ename:1,job:1,_id:0})
//o/p
[
  { ename: 'jones', job: 'manager' },
  { ename: 'blake', job: 'manager' },
  { ename: 'clark', job: 'manager' }
]


// 5. Display ename, salary of employees whose salary is between 1000 and 2000
db.emp.find({sal:{$lte:2000,$gte:1000}},{ename:1,sal:1,_id:0})
//o/p
[
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'martin', sal: 1250 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'miller', sal: 1300 }
]

// 6. Display ename, deptno of employees whose department number is not in (10, 20) 
db.emp.find({deptno:{$nin:[10,20]}},{ename:1,deptno:1,_id:0})
//o/p
[
  { ename: 'allen', deptno: 30 },
  { ename: 'ward', deptno: 30 },
  { ename: 'martin', deptno: 30 },
  { ename: 'blake', deptno: 30 },
  { ename: 'turner', deptno: 30 },
  { ename: 'james', deptno: 30 }
]

// 7. Display ename, salary of employees whose salary is NOT greater than 3000
db.emp.find({sal:{$lte:3000}},{ename:1,sal:1,_id:0})
//o/p
[
  { ename: 'smith', sal: 800 },
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'jones', sal: 2975 },
  { ename: 'martin', sal: 1250 },
  { ename: 'blake', sal: 2850 },
  { ename: 'clark', sal: 2450 },
  { ename: 'scott', sal: 3000 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'james', sal: 950 },
  { ename: 'ford', sal: 3000 },
  { ename: 'miller', sal: 1300 }
]

// 8. Display ename, job, deptno of employees who are clerk AND working in dept 20
db.emp.find({$and:[{job:"clerk"},{denopt:20}]},{ename:1,job:1,deptno:1,_id:0})
//o/p
[
  { ename: 'smith', job: 'clerk', deptno: 20 },
  { ename: 'adams', job: 'clerk', deptno: 20 }
]

// 9. Display ename, commission of employees whose commission exists
db.emp.find({comm:{$exists:true}},{ename:1,comm:1,_id;0})
//o/p
[
  { ename: 'smith', comm: null },
  { ename: 'allen', comm: 300 },
  { ename: 'ward', comm: 500 },
  { ename: 'jones', comm: null },
  { ename: 'martin', comm: 1400 },
  { ename: 'blake', comm: null },
  { ename: 'clark', comm: null },
  { ename: 'scott', comm: null },
  { ename: 'king', comm: null },
  { ename: 'turner', comm: 0 },
  { ename: 'adams', comm: null },
  { ename: 'james', comm: null },
  { ename: 'ford', comm: null },
  { ename: 'miller', comm: null }
]

// 10. Display ename, salary of employees whose commission does not exist AND salary < 1500 
db.emp.find({$and:[{sal:{$lt:1500}},{comm:{$exists:true}}]},{ename:1,sal:1,comm:1,_id:0})
//o/p
[
  { ename: 'smith', sal: 800, comm: null },
  { ename: 'ward', sal: 1250, comm: 500 },
  { ename: 'martin', sal: 1250, comm: 1400 },
  { ename: 'adams', sal: 1100, comm: null },
  { ename: 'james', sal: 950, comm: null },
  { ename: 'miller', sal: 1300, comm: null }
]

// 11. Display ename, salary of employees whose salary is greater than or equal to 2000
db.emp.find({sal:{$gte:2000}},{ename:1,sal:1,_id:0})
//o/p
[
  { ename: 'jones', sal: 2975 },
  { ename: 'blake', sal: 2850 },
  { ename: 'clark', sal: 2450 },
  { ename: 'scott', sal: 3000 },
  { ename: 'king', sal: 5000 },
  { ename: 'ford', sal: 3000 }
]


// 12. Display ename, job of employees who are neither salesman nor clerk 
db.emp.find({job:{$nin:["salesman" ,"clerk"]}},{ename:1,job:1,_id:0})
//o/p
[
  { ename: 'jones', job: 'manager' },
  { ename: 'blake', job: 'manager' },
  { ename: 'clark', job: 'manager' },
  { ename: 'scott', job: 'analyst' },
  { ename: 'king', job: 'president' },
  { ename: 'ford', job: 'analyst' }
]

// 13. Display ename, salary of employees whose salary is less than or equal to 1600 OR job is analyst
db.emp.find({$or:[{sal:{$lte:1600}},{job:"analyst"}]},{ename:1,sal:1,_id:0})
//o/p
[
  { ename: 'smith', sal: 800 },
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'martin', sal: 1250 },
  { ename: 'scott', sal: 3000 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'james', sal: 950 },
  { ename: 'ford', sal: 3000 },
  { ename: 'miller', sal: 1300 }
]

// 14. Display ename, salary of employees whose salary is not in (1000, 2000, 3000)
db.emp.find({sal:{$nin:[1000,2000,3000]}},{ename:1,sal:1,_id:0})
//o/p
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


// 15. Display ename, hiredate of employees where hiredate is of type date
db.emp.find({hiredate:{$type:"date"}},{ename:1,hiredate:1,_id:0})
//o/p
[
  { ename: 'smith', hiredate: ISODate('1980-12-17T00:00:00.000Z') },
  { ename: 'allen', hiredate: ISODate('1981-01-20T00:00:00.000Z') },
  { ename: 'ward', hiredate: ISODate('1981-02-22T00:00:00.000Z') },
  { ename: 'jones', hiredate: ISODate('1981-04-02T00:00:00.000Z') },
  { ename: 'martin', hiredate: ISODate('1981-09-28T00:00:00.000Z') },
  { ename: 'blake', hiredate: ISODate('1981-05-01T00:00:00.000Z') },
  { ename: 'clark', hiredate: ISODate('1981-06-09T00:00:00.000Z') },
  { ename: 'scott', hiredate: ISODate('1987-04-19T00:00:00.000Z') },
  { ename: 'king', hiredate: ISODate('1981-11-17T00:00:00.000Z') },
  { ename: 'turner', hiredate: ISODate('1981-09-08T00:00:00.000Z') },
  { ename: 'adams', hiredate: ISODate('1987-05-23T00:00:00.000Z') },
  { ename: 'james', hiredate: ISODate('1981-12-03T00:00:00.000Z') },
  { ename: 'ford', hiredate: ISODate('1981-12-03T00:00:00.000Z') },
  { ename: 'miller', hiredate: ISODate('1982-01-23T00:00:00.000Z') }
]

// 16. Display ename, salary, job of employees whose salary is greater than 1000 AND less than 3000 AND job is not clerk
db.emp.find({$and:[{sal:{$gte:1000,$lte:3000}},{job:{$nin:["clerk"]}}]},{ename:1,sal:1,job:1,_id:0})
//o/p
[
  { ename: 'allen', job: 'salesman', sal: 1600 },
  { ename: 'ward', job: 'salesman', sal: 1250 },
  { ename: 'jones', job: 'manager', sal: 2975 },
  { ename: 'martin', job: 'salesman', sal: 1250 },
  { ename: 'blake', job: 'manager', sal: 2850 },
  { ename: 'clark', job: 'manager', sal: 2450 },
  { ename: 'scott', job: 'analyst', sal: 3000 },
  { ename: 'turner', job: 'salesman', sal: 1500 },
  { ename: 'ford', job: 'analyst', sal: 3000 }
]

// 17. Display ename, job, salary of employees who are manager OR analyst AND salary > 2500
db.emp.find({$and:[{job:{$in:["manager","analyst"]}},{sal:{$gt:2500}}]},{ename:1,job:1,sal:1,_id:0})
//o/p
[
  { ename: 'jones', job: 'manager', sal: 2975 },
  { ename: 'blake', job: 'manager', sal: 2850 },
  { ename: 'scott', job: 'analyst', sal: 3000 },
  { ename: 'ford', job: 'analyst', sal: 3000 }
]


// Display ename, hiredate of employees who were hired before 1982-01-01
db.emp.find({hiredate:{$lte:new Date("1982-01-01")}},{ename:1,hiredate:1,_id:0})
//o/p
[
  { ename: 'smith', hiredate: ISODate('1980-12-17T00:00:00.000Z') },
  { ename: 'allen', hiredate: ISODate('1981-01-20T00:00:00.000Z') },
  { ename: 'ward', hiredate: ISODate('1981-02-22T00:00:00.000Z') },
  { ename: 'jones', hiredate: ISODate('1981-04-02T00:00:00.000Z') },
  { ename: 'martin', hiredate: ISODate('1981-09-28T00:00:00.000Z') },
  { ename: 'blake', hiredate: ISODate('1981-05-01T00:00:00.000Z') },
  { ename: 'clark', hiredate: ISODate('1981-06-09T00:00:00.000Z') },
  { ename: 'king', hiredate: ISODate('1981-11-17T00:00:00.000Z') },
  { ename: 'turner', hiredate: ISODate('1981-09-08T00:00:00.000Z') },
  { ename: 'james', hiredate: ISODate('1981-12-03T00:00:00.000Z') },
  { ename: 'ford', hiredate: ISODate('1981-12-03T00:00:00.000Z') }
]

// 18. Display ename, salary of employees whose salary is neither less than 900 nor greater than 4000
db.emp.find({sal:{$gt:900,$lt:4000}},{ename:1,sal:1,_id:0})
//o/p
[
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'jones', sal: 2975 },
  { ename: 'martin', sal: 1250 },
  { ename: 'blake', sal: 2850 },
  { ename: 'clark', sal: 2450 },
  { ename: 'scott', sal: 3000 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'james', sal: 950 },
  { ename: 'ford', sal: 3000 },
  { ename: 'miller', sal: 1300 }
]

// 19. Display ename, salary, commission of employees where commission exists OR salary is greater than 2500
db.emp.find({$or:[{comm:{$exists:true}},{sal:{$gt:2500}}]},{ename:1,sal:1,_id:0,comm:1})
//o/p
[
  { ename: 'smith', sal: 800, comm: null },
  { ename: 'allen', sal: 1600, comm: 300 },
  { ename: 'ward', sal: 1250, comm: 500 },
  { ename: 'jones', sal: 2975, comm: null },
  { ename: 'martin', sal: 1250, comm: 1400 },
  { ename: 'blake', sal: 2850, comm: null },
  { ename: 'clark', sal: 2450, comm: null },
  { ename: 'scott', sal: 3000, comm: null },
  { ename: 'king', sal: 5000, comm: null },
  { ename: 'turner', sal: 1500, comm: 0 },
  { ename: 'adams', sal: 1100, comm: null },
  { ename: 'james', sal: 950, comm: null },
  { ename: 'ford', sal: 3000, comm: null },
  { ename: 'miller', sal: 1300, comm: null }
]

// 20. Display ename, job of employees whose job is not salesman AND not manager
db.emp.find({job:{$nin:["salesman","manager"]}},{ename:1,job:1,_id:0})
//o/p
[
  { ename: 'smith', job: 'clerk' },
  { ename: 'scott', job: 'analyst' },
  { ename: 'king', job: 'president' },
  { ename: 'adams', job: 'clerk' },
  { ename: 'james', job: 'clerk' },
  { ename: 'ford', job: 'analyst' },
  { ename: 'miller', job: 'clerk' }
]
// 21. Display ename and hiredate of employees who were hired after 1981-06-01
db.emp.find({hiredate:{$gt:new Date("1981-06-01")}},{ename:1,hiredate:1,_id:0})
//o/p
[
  { ename: 'martin', hiredate: ISODate('1981-09-28T00:00:00.000Z') },
  { ename: 'clark', hiredate: ISODate('1981-06-09T00:00:00.000Z') },
  { ename: 'scott', hiredate: ISODate('1987-04-19T00:00:00.000Z') },
  { ename: 'king', hiredate: ISODate('1981-11-17T00:00:00.000Z') },
  { ename: 'turner', hiredate: ISODate('1981-09-08T00:00:00.000Z') },
  { ename: 'adams', hiredate: ISODate('1987-05-23T00:00:00.000Z') },
  { ename: 'james', hiredate: ISODate('1981-12-03T00:00:00.000Z') },
  { ename: 'ford', hiredate: ISODate('1981-12-03T00:00:00.000Z') },
  { ename: 'miller', hiredate: ISODate('1982-01-23T00:00:00.000Z') }
]
```