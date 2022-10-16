//download express dep
import express from "express";
//download bodyParser dep
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/login", (req, res) => {
    res.json({
        username: "admin"
    });
})

const users = [
    {
        username: "admin", password: "secret"
    }
]

app.post("/login", (req, res) => {
    // [x] read body as json
    // [x] check if username and password is correct
    //set a cookie

    const body = req.body;
    const username = body.username;
    const password = body.password;

    //if username and password in the body == users values => 200 OK
    if(users.find(u => u.username === username).password === password){
        res.sendStatus(200)
    } else {
        res.sendStatus(401)
    }
})

//Tells the server to listen to port 3000
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server started at http://localhost:${server.address().port}`)
})