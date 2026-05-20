import dotenv from "dotenv"
import connToDB from "./src/db/db.js"
import app from "./src/app.js"

dotenv.config()
connToDB()


app.listen(3000, () => {
  console.log("Server running port 3000")
})