// udaring the documents
db.collectionName.upadetOne({ age: 22 }, { $set: { age: 100 } }); //it will update first matching one age to 100

db.collectionName.upadetMany({ branch: "btm" }, { $set: { branch: "hebbal" } }); //it will udate all matching  branch record into hebbal
