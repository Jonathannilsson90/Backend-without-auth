import express from "express";

import usersRoutes from "./routes/users.js";

//take in incoming POST request boodies
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", usersRoutes);

//get request
app.get("/", (req, res) => {
  console.log("[TEST]");
  res.send("Hello from homepage");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
