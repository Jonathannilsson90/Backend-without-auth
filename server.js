//Get packages in variables
const express = require("express")
const app = express ()
//behövs göras en .env fil här med require

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/users', require('./routes/users'))

//get request
app.get("/", (req, res) => {
  console.log("[TEST]");
  res.send("Hello from homepage");
});

//display message when starting server
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

