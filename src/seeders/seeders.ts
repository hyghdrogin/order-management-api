import { PrismaClient } from "@prisma/client";
import productData from "./products";

const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.products.createMany({ data: productData });
    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await prisma.$disconnect();
  }
};

main();
