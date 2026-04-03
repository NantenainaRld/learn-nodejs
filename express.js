import express from "express";

const app = express();
app.set("view engine", "ejs");

//-- our first get
app.get("/", (req, res) => {
  res.send("Hey there, it's a get");
});

//-- static file (css, etc...)
app.use("/assets", express.static("public")); //-> /assets/css/test.css
//-- ejs page
app.get("/ejs", (req, res) => {
  res.render("profil", { name: "Nantenaina" });
});

app.listen(8080);
