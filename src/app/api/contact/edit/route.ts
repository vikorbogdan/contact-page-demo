import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { uploadFileToS3 } from "../../_utils/s3Uploader";

const prisma = new PrismaClient();

export async function PUT(request: Request) {
  try {
    const formData = await request.formData();
    const id = formData.get("id");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const picture = formData.get("picture");

    if (picture) {
      if (!(picture instanceof File)) {
        return NextResponse.json(
          { error: "The data is not a file" },
          { status: 400 },
        );
      }

      if (!picture.type.startsWith("image/")) {
        return NextResponse.json(
          { error: "The file is not an image" },
          { status: 400 },
        );
      }

      if (picture.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: "The picture is larger than 5MB" },
          { status: 400 },
        );
      }

      if (!name || !email || !phone) {
        return NextResponse.json(
          { error: "Please provide all the required fields" },
          { status: 400 },
        );
      }

      if (!id) {
        return NextResponse.json(
          { error: "Please provide the contact ID" },
          { status: 400 },
        );
      }

      if (isNaN(Number(id))) {
        return NextResponse.json(
          { error: "The ID should be a number" },
          { status: 400 },
        );
      }

      const buffer = Buffer.from(await picture.arrayBuffer());
      const imageUrl = await uploadFileToS3(buffer, picture.name, picture.type);

      await prisma.contact.update({
        where: { id: Number(id) },
        data: {
          name: name as string,
          email: email as string,
          phone: phone as string,
          imageUrl,
        },
      });
    } else {
      await prisma.contact.update({
        where: { id: Number(id) },
        data: {
          name: name as string,
          email: email as string,
          phone: phone as string,
        },
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
