import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const demoUserId = "27e3fb7c-6726-4d24-afa9-ad13b1716b7e";
  // Create Sample Products
  await prisma.product.createMany({
    data: Array.from({ length: 20 }).map((_, i) => ({
      userId: demoUserId,
      name: `Sample Product ${i + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
      quantity: Math.floor(Math.random() * 50) + 1,
      lowStockAt: 5,
      createdAt: new Date(Date.now() - 10000 * 60 * 60 * 24 * (i * 5)),
    })),
  });
  console.log("Seed data created.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
