# Schema Designing

```java
//create  USER Schema

db.createCollection("user",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["username","email","password","phoneNO"],
            properties:{
                username:{
                    bsonType:"string",
                    description:"Username Accepts only String"
                },
                email:{
                    bsonType:"string",
                    description:"email Accepts only String"
                },
                password:{
                    bsonType:"string",
                    description:"Password Accepts only String"
                },
                phoneNO:{
                    bsonType:"number",
                    description:"Phone Number accepts number"
                }
            }
        }
    }
})
//inserting Doc
db.user.insertOne({
username:"veereshh"
email:"v@v.com"
password:"V@8055"
phoneNO:988987
})


//Updating the Schema
db.runCommand({
    collMod:"user",
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["username","email","password","phoneNO" ,"isLogin","address"],
            properties:{
                username:{
                    bsonType:"string",
                    description:"String form"
                },
                email:{
                    bsonType:"string",
                    description:"String Form"
                },
                password:{
                    bsonType:"string",
                    description:"String Form"
                },
                phoneNO:{
                    bsonType:"number",
                    description:"Number Form "
                },
                isLogin:{
                    bsonType:"bool",
                    description:"Boolean Form"
                },
                address:{
                    bsonType:"array",
                    required:["city","state"],
                    properties:{
                        city:{
                            bsonType:"string",
                            description:"String Form "
                        },
                        state:{
                            bsonType:"string",
                            description:"String Form"
                        }
                    }
                }
            }
        }
    }
})


//inserting the documents 
db.user.insertOne({
username:"veereshh",
email:"v@v.com",
password:"V@8055",
phoneNO:988987,
isLogin:true,
address:["gadag","karnataka"]
})
```
