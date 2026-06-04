import express from "express";
const app = express();
export default app;

import employeesRouter from "#api/employees";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

app.use("/employees", employeesRouter);
