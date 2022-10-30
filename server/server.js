import express from "express";

const app = express();

app.get("/api/login", (req, res) => {
  res.json({
    username: "admin",
    fullName: "Admin Adminson",
  });
});

app.use(express.static("../client/dist"));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
