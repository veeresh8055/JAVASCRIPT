//reading the data from yhe collections
// to read the data in mongoDB  we have two methods 
//1.find({matching record})
//2.findOne({matching record})

db.collectionName.findOne({name:"veeresh"})

db.collectionName.findMany({age:22})
