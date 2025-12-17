const express = require("express");
const studentsRoutes = require("./routes/students.routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/students", studentsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
