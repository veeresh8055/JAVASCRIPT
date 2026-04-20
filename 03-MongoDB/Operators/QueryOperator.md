# Operator 

## 1.queryOperator

* $eq --> euqals 
* $ne --> notequals
* $lt --> less than
* $gt --> greater than
* $lte--> less than or equal to 
* $gte--> greater than or eualto
* $in --> in
* $nin--> not in

## questions

```javascript
1.display emp details of salesman

 db.emp.find({job : {$eq : "salesman"}})

2.display emp details expect salesman
 
 db.emp.find({job:{$ne:""salesman}})

3.display emp details whos salary is greater than 2000
 
 db.emp.find({sal:{$gte:2000}})

4.display emp details of 1600 or 3000 or 5000

 db.emp.find({sal:{$in:[1600,3000,5000]}})
