// app/api/user/route.ts
import { NextResponse } from "next/server";
import client from "@/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, userName, bio, email, userAuthId, profileImage } = body;

  if (!name || !userName || !email) {
    return NextResponse.json(
      { error: "Name, Username, and Email are required" },
      { status: 400 }
    );
  }
  try {
    const createUser = await client.user.create({
      data: {
        name,
        userName,
        bio,
        email,
        userAuthId,
        profileImage,
      },
    });
    return NextResponse.json(createUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
