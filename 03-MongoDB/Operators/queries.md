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

// 1. Display ename, salary of employees whose salary is greater than 2500

// 2. Display ename, job of employees who are salesman OR salary less than 1200 

// 3. Display ename, salary, deptno of employees whose salary is in (800, 1500, 3000)

// 4. Display ename, job of employees whose job is not manager 

// 5. Display ename, salary of employees whose salary is between 1000 and 2000

// 6. Display ename, deptno of employees whose department number is not in (10, 20) 

// 7. Display ename, salary of employees whose salary is NOT greater than 3000

// 8. Display ename, job, deptno of employees who are clerk AND working in dept 20

// 9. Display ename, commission of employees whose commission exists

// 10. Display ename, salary of employees whose commission does not exist AND salary < 1500 

// 11. Display ename, salary of employees whose salary is greater than or equal to 2000

// 12. Display ename, job of employees who are neither salesman nor clerk 

// 13. Display ename, salary of employees whose salary is less than or equal to 1600 OR job is analyst

// 14. Display ename, salary of employees whose salary is not in (1000, 2000, 3000)

// 15. Display ename, hiredate of employees where hiredate is of type date

// 16. Display ename, salary, job of employees whose salary is greater than 1000 AND less than 3000 AND job is not clerk

// 17. Display ename, job, salary of employees who are manager OR analyst AND salary > 2500

// Display ename, hiredate of employees who were hired before 1982-01-01

// 18. Display ename, salary of employees whose salary is neither less than 900 nor greater than 4000

// 19. Display ename, salary, commission of employees where commission exists OR salary is greater than 2500

// 20. Display ename, job of employees whose job is not salesman AND not manager

// 21. Display ename and hiredate of employees who were hired after 1981-06-01