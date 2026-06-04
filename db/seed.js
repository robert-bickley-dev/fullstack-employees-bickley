import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 1; i < 11; i++) {
    const randomName = faker.person.fullName();
    const randomBirthday = faker.date.birthdate();
    const randomSalary = faker.finance.amount({
      min: 50000,
      max: 200000,
      dec: 0,
    });

    await createEmployee(randomName, randomBirthday, randomSalary);
  }
}
