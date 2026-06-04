import db from "#db/client";
import { faker } from "@faker-js/faker";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const randomName = faker.person.fullName();
  const randomBirthday = faker.date.birthdate();
  const randomSalary = faker.finance.amount({
    min: 50000,
    max: 200000,
    dec: 0,
  });

  for (let i = 1; i < 11; i++) {
    await createEmployee(randomName, randomBirthday, randomSalary);
  }
}
