import express from "express";

const app = express();

//Tells the server to listen to port 3000
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server started at http://localhost:${server.address().port}`)
})