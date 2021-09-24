const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    "mongodb://root:test123@api-server-db:27017/api-server-db?authSource=admin&readPreference=primary",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Item = require("./mongo/models/Item");

app.get("/", (req, res) => {
  Item.find()
    .then((items) => {
      res.render("index", { items });
    })
    .catch((err) => {
      res
        .status(404)
        .json({
          msg: "No items logic passed through, or issues connecting to the db",
        });
    });
});

app.post("/item/add", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.redirect("/"));
});

const port = 8000;

app.listen(port, () => console.log("Server running..."));
console.log("hello");
