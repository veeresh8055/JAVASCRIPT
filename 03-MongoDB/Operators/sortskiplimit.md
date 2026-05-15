## $sort , $skip , $limit 

```java 
// find the first highest salary emp details 
db.emp.aggregate([
    {
        $group:{
            _id:"$sal",
            emloyee : {$push :"$$ROOT"}
        }
    },
    {
        $sort:{_id:-1}
    },
    {
        $limit:1
    }
])

//o/p
[
  {
    _id: 950,
    emloyee: [
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
      }
    ]
  }
]
```

```java
//first lowest salary 
db.emp.aggregate([
    {
        $group:{
            _id:"$sal",
            emloyee : {$push :"$$ROOT"}
        }
    },
    {
        $sort:{_id:1}
    },
    {
        $limit:1
    }
])
//o/p
[
  {
    _id: 5000,
    emloyee: [
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
      }
    ]
  }
]

```
```java
//3. find second highest salary 
db.emp.aggregate([
    {
        $group:{
            _id:"$sal",
            emp:{$push:"$$ROOT"}
        }
    },
    {
        $sort:{_id:-1}
    },
    {
        $skip:1
    },
    {
        $limit:1
    },
    {
       $unwind:"$emp"
    },
    {
      $project:{
        sal:"$_id",
        name:"$emp.ename",
        _id:0
      }
    }
])
//o/p
[
  {
    _id: 3000,
    emp: [
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
  }
]


```

```java
//3. find the 2nd hisest and the 2nd lowest salary 
db.emp.aggregate([
    {
        $group:{
            _id:"$sal",
            emp:{$push:"$$ROOT"}

        }
    },
    {
        $facet:{
            second_highest_salary :[{$sort:{_id:-1}},{$skip:1},{$limit:1}],
            second_lowest_salary :[{$sort:{_id:1}},{$skip:1},{$limit:1}]
        }
    }
])
//o/p
[
  {
    second_highest_salary: [
      {
        _id: 3000,
        emp: [
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
      }
    ],
    second_lowest_salary: [
      {
        _id: 1100,
        emp: [
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
          }
        ]
      }
    ]
  }
]

```


