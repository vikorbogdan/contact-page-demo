import { NextResponse } from "next/server";
import { uploadFileToS3 } from "../../_utils/s3Uploader";
import { prisma } from "@/db";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const picture = formData.get("picture");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Please provide all the required fields" },
        { status: 400 },
      );
    }

    let imageUrl: string;

    if (picture && picture instanceof File) {
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

      const buffer = Buffer.from(await picture.arrayBuffer());
      imageUrl = await uploadFileToS3(buffer, picture.name, picture.type);
    } else {
      const colors = ["", "_Blue", "_Green", "_Purple", "_Red", "_Yellow"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      imageUrl = `https://contact-demo-app.s3.eu-north-1.amazonaws.com/profilePictures/default/Default${randomColor}.png`;
    }

    const user = await prisma.contact.create({
      data: {
        name: name as string,
        email: email as string,
        phone: phone as string,
        imageUrl,
      },
    });

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
