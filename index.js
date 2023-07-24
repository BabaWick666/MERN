const app = require("express")();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("hello node API");
});

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
