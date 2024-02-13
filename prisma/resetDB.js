const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  await prisma.$executeRawUnsafe('DROP Database rentalmotor')
  await prisma.$executeRawUnsafe('CREATE Database rentalmotor')
}
console.log('Reset DB')
run()