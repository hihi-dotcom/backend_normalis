import app from './app'
import dotenv from "dotenv"
dotenv.config()


//const PORT = process.env.PORT
app.listen(3000,() => console.log(`A szerver fut a ${3000} porton`))