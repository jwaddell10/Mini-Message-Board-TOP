const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/new", function (req, res, next) {
  res.render("form");
  console.log("form rendered");
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res) => {
  const userName = req.body.author;
  const userMessage = req.body.message;
  res.send(`Username: ${userName}, Message: ${userMessage}`);
});

module.exports = router;
