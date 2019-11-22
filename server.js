const app = require("express")();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("sajal ki maa ki jai!");
});

app.listen(PORT);
