import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import client from "@/libs/prismadb";

export async function PATCH(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json({ error: "Not Authorized" }, { status: 403 });
    }
    const body = await req.json();
    const { profileImage, userName } = body;

    const existingUser = await client.user.findFirst({
      where: { userName },
    });

    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (existingUser.userAuthId !== userId) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const updatedUser = await client.user.update({
      where: {
        userName: userName,
      },
      data: {
        profileImage: profileImage,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (e) {
    console.log(e);
  }
}
