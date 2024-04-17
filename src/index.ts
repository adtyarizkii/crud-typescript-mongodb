import express from "express";
import mongoose from "mongoose";
import router from "./routes";

const port = 4000
const app = express()
app.use(express.json())

const DB_URL = "mongodb://127.0.0.1:27017"
mongoose.connect(DB_URL, {
    dbName: "crud-typescript",
}).then(() => {
    console.log(`Database connected successfuly!`);
}).catch((error) => {
    console.log(error);
})

app.use("/", router)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})