import express from "express";
const router = express.Router();
export default router;

import { getEmployees } from "#db/queries/employees.js";

router.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});
