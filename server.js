//download express dep
import express from "express";
//download bodyParser dep
import bodyParser from "body-parser";
//download cookieParser dep
import cookieParser from "cookie-parser";

const app = express();
//app.use "Middleware"
app.use(bodyParser.json());
app.use(cookieParser());


//
app.get("/login", (req, res) => {
    const user = users.find(u => u.username === req.cookies.username);
    const {username, fullName} = user
    res.json({username, fullName});
})



// Current "database"
const users = [
    {
        username: "admin", password: "secret", fullName: "Test person"
    }
]



// Checks if user is in the database -->> true -> 200 OK || false -> 401 Unauthorized.
app.post("/login", (req, res) => {
    // [x] read body as json
    // [x] check if username and password is correct
    //set a cookie
    const {username, password} = req.body;

    // If username and password in the body == users values in "database" => 200 OK
    if(users.find(u => u.username === username).password === password){
        res.cookie("username", username)
        res.sendStatus(200)
    } else {
        res.sendStatus(401)
    }
})


//Serves static files from "public" directory.
app.use(express.static("public"))


//Tells the server to listen to port 3000
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server started at http://localhost:${server.address().port}`)
})