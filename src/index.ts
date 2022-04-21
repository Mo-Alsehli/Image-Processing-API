import express from "express";
import routes from "./routes/index";

// Making The App Server Using Express Framework.
const app = express();
// Assigning Port In A Variable.
const port = 5001;

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("server");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
