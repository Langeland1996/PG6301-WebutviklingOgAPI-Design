//download express dep
import express from "express";
//download bodyParser dep
import bodyParser from "body-parser";
//download cookieParser dep
import cookieParser from "cookie-parser";
//download dotenv dep
//needed to use process.env.COOKIES_SECRET
import dotenv from "dotenv";
dotenv.config();

const app = express();
//app.use "Middleware"
// needed for reading the body of a html file.
app.use(bodyParser.json());
// needed for keeping database data safe | unique id.
app.use(cookieParser(process.env.COOKIES_SECRET));
// needed to use post request.
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    const {username} = req.signedCookies;
    req.user = users.find(u => u.username === username);
    next();
})


//
app.get("/login", (req, res) => {

    if (!req.user){
        //Unauthorized
        res.sendStatus(401)
    }

    const {username, fullName} = req.user
    res.json({username, fullName});
})



// Current "database"
const users = [
    {
        username: "admin", password: "secret", fullName: "Test person"
    },
    {
        username: "dummyuser", password: "dummy", fullName: "Noen Andre"
    }
]



// Checks if user is in the database -->> true -> 200 OK || false -> 401 Unauthorized.
app.post("/login", (req, res) => {
    // [x] read body as json
    // [x] check if username and password is correct
    //set a cookie

    // getting variables from the body/html page
    const {username, password} = req.body;
    // Checking if username exists in the database
    const user = users.find(u => u.username === username)

    // If username exist and the password is correct => 200 OK
    if(user && user.password === password){
        res.cookie("username", username, {signed: true})
        res.sendStatus(200)
    } else {
        //Unauthorized
        res.sendStatus(401)
    }
})

//
app.get("/users", (req, res) => {
    //If user with cookie doest exist ---> 401
    if(!req.user){
        return res.sendStatus(401);
    }
    //Displays user personal info
    const {username, fullName} = req.user;
    res.json("Username: "+username +". Fullname: "+ fullName)

    //Displays all users info
    //res.json(users.map(({fullName, username }) => ({username, fullName})));
})


//Serves static files from "public" directory.
app.use(express.static("public"))


//Tells the server to listen to port 3000
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server started at http://localhost:${server.address().port}`)
})