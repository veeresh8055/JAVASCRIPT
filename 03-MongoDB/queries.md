## queries

```isplay ename , locatioon of all employess
1.d

db.emp.aggregate([
    {
        $lookup:{
            from:"dept",
            localField:"deptno",
            foreignField:"deptno",
            as:"dept_details"
        }
    },
    {
        $unwind:"$dept_details"
    },
    {
        $project:{
            ename:1,
            _id:0,
            location:"$dept_details.loc"
        }
    }
])

o/p
[
  { ename: 'smith', location: 'dallas' },
  { ename: 'allen', location: 'chicago' },
  { ename: 'ward', location: 'chicago' },
  { ename: 'jones', location: 'dallas' },
  { ename: 'martin', location: 'chicago' },
  { ename: 'blake', location: 'chicago' },
  { ename: 'clark', location: 'new york' },
  { ename: 'scott', location: 'dallas' },
  { ename: 'king', location: 'new york' },
  { ename: 'turner', location: 'chicago' },
  { ename: 'adams', location: 'dallas' },
  { ename: 'james', location: 'chicago' },
  { ename: 'ford', location: 'dallas' },
  { ename: 'miller', location: 'new york' }
]
```

```
2.display ename location of all employees who are working in sales

db.emp.aggregate([
    {
        $lookup:{
            from:"dept",
            localField:"deptno",
            foreignField:"deptno",
            as:"dept_details"
        }
    },
    {
        $unwind:"$dept_details"
    },
    {
        $match:{"dept_details.dname":"sales"}
    },

    {
        $project:{
            ename:1,
            _id:0,
            location:"$dept_details.loc",
           d_name : "$dept_details.dname"
        }
    }
])
o/p
[
  { ename: 'allen', location: 'chicago', d_name: 'sales' },
  { ename: 'ward', location: 'chicago', d_name: 'sales' },
  { ename: 'martin', location: 'chicago', d_name: 'sales' },
  { ename: 'blake', location: 'chicago', d_name: 'sales' },
  { ename: 'turner', location: 'chicago', d_name: 'sales' },
  { ename: 'james', location: 'chicago', d_name: 'sales' }
]



```

```
3.display ename sal dept name and location of all salesman

db.emp.aggregate([
    {
        $match:{job:"salesman"}
    },
    {
        $lookup:{
            from:"dept",
            localField:"deptno",
            foreignField:"deptno",
            as:"dept_details"
        }
    },
    {
        $unwind:"$dept_details"
    },
    {
        $project:{
            ename:1,
            _id:0,
            sal:1,
            location:"$dept_details.loc",
           d_name : "$dept_details.dname"
        }
    }
])
o/p
[
  { ename: 'allen', sal: 1600, location: 'chicago', d_name: 'sales' },
  { ename: 'ward', sal: 1250, location: 'chicago', d_name: 'sales' },
  { ename: 'martin', sal: 1250, location: 'chicago', d_name: 'sales' },
  { ename: 'turner', sal: 1500, location: 'chicago', d_name: 'sales' }
]

```

```
4.display ename and his manager

db.emp.aggregate([
    {
        $lookup:{
            from:"emp",
            localField:"mgr",
            foreignField:"empno",
            as:"mgr_details"
        }
    },
    {
        $unwind:"$mgr_details"
    },
    {
        $project:{
            ename:1,
            _id:0,
            manager :"$mgr_details.ename"
        }
    }
])
o/p
[
  { ename: 'smith', manager: 'ford' },
  { ename: 'allen', manager: 'blake' },
  { ename: 'ward', manager: 'blake' },
  { ename: 'jones', manager: 'king' },
  { ename: 'martin', manager: 'blake' },
  { ename: 'blake', manager: 'king' },
  { ename: 'clark', manager: 'king' },
  { ename: 'scott', manager: 'jones' },
  { ename: 'turner', manager: 'blake' },
  { ename: 'adams', manager: 'scott' },
  { ename: 'james', manager: 'blake' },
  { ename: 'ford', manager: 'jones' },
  { ename: 'miller', manager: 'clark' }
]

```

```
5.display emps woring under managers

db.emp.aggregate([
    {
        $lookup:{
            from:"emp",
            localField:"empno",
            foreignField:"mgr",
            as:"manager"

        }
    },

    {
        $project:{
            ename:1,
            _id:0,
            emps:"$manager.ename"
        }
    }
])
o/p
[
  { ename: 'smith', emps: [] },
  { ename: 'allen', emps: [] },
  { ename: 'ward', emps: [] },
  { ename: 'jones', emps: [ 'scott', 'ford' ] },
  { ename: 'martin', emps: [] },
  {
    ename: 'blake',
    emps: [ 'allen', 'ward', 'martin', 'turner', 'james' ]
  },
  { ename: 'clark', emps: [ 'miller' ] },
  { ename: 'scott', emps: [ 'adams' ] },
  { ename: 'king', emps: [ 'jones', 'blake', 'clark' ] },
  { ename: 'turner', emps: [] },
  { ename: 'adams', emps: [] },
  { ename: 'james', emps: [] },
  { ename: 'ford', emps: [ 'smith' ] },
  { ename: 'miller', emps: [] }
]

```

```
6.employees working under blake
db.emp.aggregate([
    {
        $match:{ename:"blake"}
    },
    {
        $lookup:{
            from:"emp",
            localField:"empno",
            foreignField:"mgr",
            as:"employees"
        }
    },
    {
        $project:{
            ename:1,
            _id:0,
            employees:"$employees.ename"
        }
    }
])
o/p
[
  {
    ename: 'blake',
    employees: [ 'allen', 'ward', 'martin', 'turner', 'james' ]
  }
]

```

```
7.display ename and his manager name who are working as analyst

db.emp.aggregate([
    {
        $lookup:{
            from:"emp",
            localField:"mgr",
            foreignField:"empno",
            as:"mgr_details"
        }
    },
    {
        $match:{job:"analyst"}
    },
    {
        $project:{
            ename:1,
            _id:0,
            manager:"$mgr_details.ename",
            job:1
        }
    }
])
o/p
[
  { ename: 'scott', job: 'analyst', manager: [ 'jones' ] },
  { ename: 'ford', job: 'analyst', manager: [ 'jones' ] }
]

```

```
8.display emname job and his manager job name who are working as salesman and job of manager is manager

db.emp.aggregate([
    {
        $lookup:{
            from:"emp",
            localField:"mgr",
            foreignField:"empno",
            as:"mgr_details"
       }
    },
    {
        $unwind:"$mgr_details"
    },
    {
        $match:{job:"salesman" , "mgr_details.job":"manager"}
    },
    {
        $project:{
            _id:0,
            ename:1,
            job:1,
            manager:"$mgr_details.ename",
            manger_job:"$mgr_details.job"
        }
    }
])
o/p
[
  {
    ename: 'allen',
    job: 'salesman',
    manager: 'blake',
    manger_job: 'manager'
  },
  {
    ename: 'ward',
    job: 'salesman',
    manager: 'blake',
    manger_job: 'manager'
  },
  {
    ename: 'martin',
    job: 'salesman',
    manager: 'blake',
    manger_job: 'manager'
  },
  {
    ename: 'turner',
    job: 'salesman',
    manager: 'blake',
    manger_job: 'manager'
  }
]

```

```
9.display ename ,  sal , doj and his manager sal , doj only if the employee is joined after manager and earning more than manager

db.emp.aggregate([
    {
        $lookup:{
            from:"emp",
            localField:"mgr",
            foreignField:"empno",
            as:"mgr_details"
        }
    },
    {
        $unwind:"$mgr_details"
    },
    {
     $match:{
        $and:[
            {$expr:{$lt:["$hiredate" , "$mgr_details.hiredate"]}},
            {$expr:{$lt :["$sal" , "mgr_details.sal" ]}}
        ]
     }
    },
    {
        $project:{
            ename:1,
            sal:1,
            hiredate:1,
            _id:0,
            mgr_name:"$mgr_details.ename",
            mgr_sal:"$mgr_details.sal",
            mgr_hiredate:"$mgr_details.hiredate"
        }
    }
])
o/p
[
  {
    ename: 'smith',
    hiredate: ISODate('1980-12-17T00:00:00.000Z'),
    sal: 1800,
    mgr_name: 'ford',
    mgr_sal: 3000,
    mgr_hiredate: ISODate('1981-12-03T00:00:00.000Z')
  },
  {
    ename: 'allen',
    hiredate: ISODate('1981-01-20T00:00:00.000Z'),
    sal: 1600,
    mgr_name: 'blake',
    mgr_sal: 2850,
    mgr_hiredate: ISODate('1981-05-01T00:00:00.000Z')
  },
  {
    ename: 'ward',
    hiredate: ISODate('1981-02-22T00:00:00.000Z'),
    sal: 1250,
    mgr_name: 'blake',
    mgr_sal: 2850,
    mgr_hiredate: ISODate('1981-05-01T00:00:00.000Z')
  },
  {
    ename: 'jones',
    hiredate: ISODate('1981-04-02T00:00:00.000Z'),
    sal: 2975,
    mgr_name: 'king',
    mgr_sal: 5000,
    mgr_hiredate: ISODate('1981-11-17T00:00:00.000Z')
  },
  {
    ename: 'blake',
    hiredate: ISODate('1981-05-01T00:00:00.000Z'),
    sal: 2850,
    mgr_name: 'king',
    mgr_sal: 5000,
    mgr_hiredate: ISODate('1981-11-17T00:00:00.000Z')
  },
  {
    ename: 'clark',
    hiredate: ISODate('1981-06-09T00:00:00.000Z'),
    sal: 2450,
    mgr_name: 'king',
    mgr_sal: 5000,
    mgr_hiredate: ISODate('1981-11-17T00:00:00.000Z')
  }
]

```
```
10.display ename manager name and managers manager name
db.emp.aggregate([
{
$lookup:{
from:"emp",
localField:"mgr",
foreignField:"empno",
as:"mgr_details"
}
},
{
$unwind:"$mgr_details"
},
{
$lookup:{
from:"emp",
localField:"mgr_details.mgr",
foreignField:"empno",
as:"mgrs_mgr_details"
}
},
{
$unwind:"$mgrs_mgr_details"
},
{
$project:{
ename:1,
_id:0,
manager:"$mgr_details.ename",
mgrs_manager:"$mgrs_mgr_details.ename"
}
}
])
o/p
[
{ ename: 'smith', manager: 'ford', mgrs_manager: 'jones' },
{ ename: 'allen', manager: 'blake', mgrs_manager: 'king' },
{ ename: 'ward', manager: 'blake', mgrs_manager: 'king' },
{ ename: 'martin', manager: 'blake', mgrs_manager: 'king' },
{ ename: 'scott', manager: 'jones', mgrs_manager: 'king' },
{ ename: 'turner', manager: 'blake', mgrs_manager: 'king' },
{ ename: 'adams', manager: 'scott', mgrs_manager: 'jones' },
{ ename: 'james', manager: 'blake', mgrs_manager: 'king' },
{ ename: 'ford', manager: 'jones', mgrs_manager: 'king' },
{ ename: 'miller', manager: 'clark', mgrs_manager: 'king' }
]

```

```
11.display name , sal
if emplyee is earning less than his manager and manager is earnig less than his manager

db.emp.aggregate([
{
$lookup:{
            from:"emp",
            localField:"mgr",
            foreignField:"empno",
            as:"mgr_details"
        }
    },
    {
        $unwind:"$mgr_details"
},
{
$lookup:{
            from:"emp",
            localField:"mgr_details.mgr",
            foreignField:"empno",
            as:"mgrs_mgr_details"
        }
    },
    { $unwind:"$mgrs_mgr_details"
}
,
{
$match:{
        $and:[
            {$expr:{$lt:["$sal" , "$mgr_details.sal"]}},
            {$expr:{$lt:["$mgr_details.sal" , "mgrs_mgr_details.sal"]}},

        ]
         }
    },

    {
        $project:{
            ename:1,
            _id:0,
            sal:1,
            mgr_name:"$mgr_details.ename",
            mgr_sal:"$mgr_details.sal",
            mgrs_mgr_name:"$mgrs_mgr_details.ename",
            mgrs_mgr_sal:"$mgrs_mgr_details.sal"
        }
    }

])
```

```
12.display name job and doj
if emlyee jined before manager and earning more than manager but manager is earning less than his manager an joined before manager

db.emp.aggregate([
{
$lookup:{
            from:"emp",
            localField:"mgr",
            foreignField:"empno",
            as:"mgr_details"
        }
    },
    {
        $unwind:"$mgr_details"
},
{
$lookup:{
            from:"emp",
            localField:"mgr_details.mgr",
            foreignField:"empno",
            as:"mgrs_mgr_details"
        }
    },
    {
        $unwind:"$mgrs_mgr_details"
},
{
$match:{
            $or:[
                {$and:[ {$expr:{$lt:["$hiredate" , "$mgr_details.hiredate"]}} , {$expr:{$gt:["$sal" , "$mgr_details.sal"]}} ]},
{$and:[{$expr:{$lt :["$mgr_details.sal" , "$mgrs_mgr_details.sal"]}} , {$expr:{$lt :["$mgr_details.hiredate" , "$mgrs_mgr_details.hiredate"]}}] }
]

        }
    },
    {
        $project:{
            ename:1,
            job:1,
            hiredate:1,
            mgr_name:"$mgr_details.ename",
            mgr_job:"$mgr_details.job",
            mgr_hiredate:"$mgr_details.hiredate",
            mgrs_mgr_name:"$mgrs_mgr_details.ename",
            mgrs_mgr_job:"$mgrs_mgr_details.job",
            mgrs_mgr_hiredate:"$mgrs_mgr_details.hiredate"
        }
    }

])
```


