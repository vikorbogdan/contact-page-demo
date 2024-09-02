import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedContacts = async () => {
  const colors = ["Blue", "Green", "Purple", "Red", "Yellow"];
  const defaultImageUrl = (color: string) =>
    `https://contact-demo-app.s3.eu-north-1.amazonaws.com/profilePictures/default/Default_${color}.png`;

  const generateContacts = (num: number) => {
    const contacts = [];
    for (let i = 0; i < num; i++) {
      contacts.push({
        name: `Contact ${i + 1}`,
        email: `contact${i + 1 + Math.random() * 100}@demo.com`,
        phone: `36012345678`,
        imageUrl: defaultImageUrl(
          colors[Math.floor(Math.random() * colors.length)],
        ),
      });
    }
    return contacts;
  };

  const contacts = generateContacts(3);

  for (const contact of contacts) {
    await prisma.contact.create({
      data: contact,
    });
  }

  console.log("Seeding complete!");
};

seedContacts()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
