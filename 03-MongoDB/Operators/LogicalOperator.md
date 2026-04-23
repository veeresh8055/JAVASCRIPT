# Logical Operator 
* $and
* $or
* $not
* $nor
---

```javascript
//1.display emp details who are working as analyst and earnig more than 1500
db.emp.find({$and:[{job:"analyst"},{sal:{$gt:1500}}]})
 //output

 [
  {
    _id: ObjectId('69e5f73e57f6f988443682ea'),
    empno: 7788,
    ename: 'scott',
    job: 'analyst',
    mgr: 7566,
    hiredate: ISODate('1987-04-19T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682ef'),
    empno: 7902,
    ename: 'ford',
    job: 'analyst',
    mgr: 7566,
    hiredate: ISODate('1981-12-03T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  }
]


//2.display ename and job ,who are working as analyst and earnig more than 1500
db.emp.find({$and:[{job:"analyst"},{sal:{$gt:1500}}]},{ename:1,job:1,_id:0})

//output
[
  { ename: 'scott', job: 'analyst' },
  { ename: 'ford', job: 'analyst' }
]

//3.
db.emp.find({$or:[{job:"analyst"},{sal:{$gt:1500}}]})
//output
[
  {
    _id: ObjectId('69e5f73e57f6f988443682e4'),
    empno: 7499,
    ename: 'allen',
    job: 'salesman',
    mgr: 7698,
    hiredate: ISODate('1981-01-20T00:00:00.000Z'),
    sal: 1600,
    comm: 300,
    deptno: 30
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682e6'),
    empno: 7566,
    ename: 'jones',
    job: 'manager',
    mgr: 7839,
    hiredate: ISODate('1981-04-02T00:00:00.000Z'),
    sal: 2975,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682e8'),
    empno: 7698,
    ename: 'blake',
    job: 'manager',
    mgr: 7839,
    hiredate: ISODate('1981-05-01T00:00:00.000Z'),
    sal: 2850,
    comm: null,
    deptno: 30
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682e9'),
    empno: 7782,
    ename: 'clark',
    job: 'manager',
    mgr: 7839,
    hiredate: ISODate('1981-06-09T00:00:00.000Z'),
    sal: 2450,
    comm: null,
    deptno: 10
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682ea'),
    empno: 7788,
    ename: 'scott',
    job: 'analyst',
    mgr: 7566,
    hiredate: ISODate('1987-04-19T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682eb'),
    empno: 7839,
    ename: 'king',
    job: 'president',
    mgr: null,
    hiredate: ISODate('1981-11-17T00:00:00.000Z'),
    sal: 5000,
    comm: null,
    deptno: 10
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682ef'),
    empno: 7902,
    ename: 'ford',
    job: 'analyst',
    mgr: 7566,
    hiredate: ISODate('1981-12-03T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  }
]

//4.

db.emp.find({$nor:[{job:"analyst"},{sal:{$gt:1500}}]})
//output
[
  {
    _id: ObjectId('69e5f73e57f6f988443682e3'),
    empno: 7369,
    ename: 'smith',
    job: 'clerk',
    mgr: 7902,
    hiredate: ISODate('1980-12-17T00:00:00.000Z'),
    sal: 800,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682e5'),
    empno: 7521,
    ename: 'ward',
    job: 'salesman',
    mgr: 7698,
    hiredate: ISODate('1981-02-22T00:00:00.000Z'),
    sal: 1250,
    comm: 500,
    deptno: 30
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682e7'),
    empno: 7654,
    ename: 'martin',
    job: 'salesman',
    mgr: 7698,
    hiredate: ISODate('1981-09-28T00:00:00.000Z'),
    sal: 1250,
    comm: 1400,
    deptno: 30
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682ec'),
    empno: 7844,
    ename: 'turner',
    job: 'salesman',
    mgr: 7698,
    hiredate: ISODate('1981-09-08T00:00:00.000Z'),
    sal: 1500,
    comm: 0,
    deptno: 30
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682ed'),
    empno: 7876,
    ename: 'adams',
    job: 'clerk',
    mgr: 7788,
    hiredate: ISODate('1987-05-23T00:00:00.000Z'),
    sal: 1100,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682ee'),
    empno: 7900,
    ename: 'james',
    job: 'clerk',
    mgr: 7698,
    hiredate: ISODate('1981-12-03T00:00:00.000Z'),
    sal: 950,
    comm: null,
    deptno: 30
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682f0'),
    empno: 7934,
    ename: 'miller',
    job: 'clerk',
    mgr: 7782,
    hiredate: ISODate('1982-01-23T00:00:00.000Z'),
    sal: 1300,
    comm: null,
    deptno: 10
  }
]

//5.salary not greater than 3000
db.emp.find({sal:{$not:{$lt:3000}}})
//output
[
  {
    _id: ObjectId('69e5f73e57f6f988443682ea'),
    empno: 7788,
    ename: 'scott',
    job: 'analyst',
    mgr: 7566,
    hiredate: ISODate('1987-04-19T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682eb'),
    empno: 7839,
    ename: 'king',
    job: 'president',
    mgr: null,
    hiredate: ISODate('1981-11-17T00:00:00.000Z'),
    sal: 5000,
    comm: null,
    deptno: 10
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682ef'),
    empno: 7902,
    ename: 'ford',
    job: 'analyst',
    mgr: 7566,
    hiredate: ISODate('1981-12-03T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  }
]

// 6.
 db.emp.find({sal:{$not:{$lt:3000}}})
//output
[
  {
    _id: ObjectId('69e5f73e57f6f988443682ea'),
    empno: 7788,
    ename: 'scott',
    job: 'analyst',
    mgr: 7566,
    hiredate: ISODate('1987-04-19T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682eb'),
    empno: 7839,
    ename: 'king',
    job: 'president',
    mgr: null,
    hiredate: ISODate('1981-11-17T00:00:00.000Z'),
    sal: 5000,
    comm: null,
    deptno: 10
  },
  {
    _id: ObjectId('69e5f73e57f6f988443682ef'),
    empno: 7902,
    ename: 'ford',
    job: 'analyst',
    mgr: 7566,
    hiredate: ISODate('1981-12-03T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  }
]

```


