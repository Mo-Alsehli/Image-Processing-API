import express from "express";

// Making The App Server Using Express Framework.
const app = express();
// Assigning Port In A Variable.
const port = 5001;

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
