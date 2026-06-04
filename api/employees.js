import express from "express";
const router = express.Router();
export default router;

import { getEmployees } from "#db/queries/employees.js";

router.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

router.post("/", async (req, res) => {
  if (!req.body) return res.status(400).send("Request body is required");

  const { name, birthday, salary } = req.body;
  const employee = await createEmployee(name, birthday, salary);
});
