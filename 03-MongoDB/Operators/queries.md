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

//4.comm is not exists amd sal < 2000

//5.job is salesman or  sal is 3000

//6.sal is not less than 2000

//7.manager or working in dept 10 

//8.sal 1000 < 4000
//comm is exist and sal gt 1500
//job clerk or manager and sal > 1000