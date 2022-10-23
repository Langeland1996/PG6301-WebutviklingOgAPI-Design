import express from "express";
const app = express();



app.get("/login", (req, res, next) =>{
    res.json({username: "Noen andre"})
})

app.post("/login ", (req, res) =>{
    res.sendStatus(401)
})











const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Started on http://localhost:${server.address().port}`)
})