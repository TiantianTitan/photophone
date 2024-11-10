const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 清除现有用户数据
  await prisma.user.deleteMany();

  // 创建用户数据
  await prisma.user.createMany({
    data: [
      { email: "student1@example.com", password: "password123" },
      { email: "student2@example.com", password: "password123" },
      { email: "recruiter1@example.com", password: "password123" },
      { email: "recruiter2@example.com", password: "password123" }
    ],
  });

  console.log('Data has been seeded successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
