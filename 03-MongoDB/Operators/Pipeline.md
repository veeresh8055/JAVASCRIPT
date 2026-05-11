# $pipeline

```java 
//1.display emp name and job hos job is same as miller job

db.emp.aggregate([
    {
        $match:{ename:"miller"}
    },
    {
        $lookup:{
            from:"emp",
            let:{miller_job:"$job" , miller_no:"$empno"},
            pipeline:[
                {
                    $match:{
                       $and:[
                        {$expr:{$eq:["$job" , "$$miller_job"]}},
                        {$expr:{$ne :["$empno" , "$$miller_no"]}}
                       ]
                    }
                }
            ],
            as:"job_sameas_miller"
        }
    },
    {
        $project:{
            ename:1,
            _id:0,
            job:1,
       "job_sameas_miller.job":1,        
       "job_sameas_miller.ename":1        
        }
    }
])
```
```java

//2. display emp details who joined after aller and earning more than allen 

db.emp.aggregate([
    {
        $match:{ename:"allen"}
    },
    {
        $lookup:{
            from:"emp",
            let:{allen_hiredate:"$hiredate" , allen_sal:"$sal"},
            pipeline:[
                {
                    $match:{
                        $and:[
                            {$expr:{$lt:["$$allen_hiredate" , "$hiredate"]}},
                            {$expr:{$gt: ["$sal" , "$$allen_sal"]}}
                        ]
                    }
                }
            ],
            as:"emp_joined_af_sal_gt_allen"
        }
    }
    ,
    {
        $project:{
            ename:1,
            sal:1,
            _id:0,
            hiredate:1,
            "emp_joined_af_sal_gt_allen.ename" :1,
            "emp_joined_af_sal_gt_allen.sal" :1,
            "emp_joined_af_sal_gt_allen.hiredate" :1

        }
    }
])
// o/p
[
  {
    ename: 'allen',
    hiredate: ISODate('1981-01-20T00:00:00.000Z'),
    sal: 1600,
    emp_joined_af_sal_gt_allen: [
      {
        ename: 'jones',
        hiredate: ISODate('1981-04-02T00:00:00.000Z'),
        sal: 2975
      },
      {
        ename: 'blake',
        hiredate: ISODate('1981-05-01T00:00:00.000Z'),
        sal: 2850
      },
      {
        ename: 'clark',
        hiredate: ISODate('1981-06-09T00:00:00.000Z'),
        sal: 2450
      },
      {
        ename: 'scott',
        hiredate: ISODate('1987-04-19T00:00:00.000Z'),
        sal: 3000
      },
      {
        ename: 'king',
        hiredate: ISODate('1981-11-17T00:00:00.000Z'),
        sal: 5000
      },
      {
        ename: 'ford',
        hiredate: ISODate('1981-12-03T00:00:00.000Z'),
        sal: 3000
      }
    ]
  }
]
```