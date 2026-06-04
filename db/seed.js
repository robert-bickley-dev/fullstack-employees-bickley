import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 1; i < 15; i++) {
    const randomName = faker.person.fullName();
    const randomBirthday = faker.date.birthdate();
    const randomSalary = faker.number.int({ min: 50000, max: 200000 });

    await createEmployee({
      name: randomName,
      birthday: randomBirthday,
      salary: randomSalary,
    });
  }
}
