import { NextResponse } from "next/server";
import client from "@/libs/prismadb";
import { revalidatePath } from "next/cache";

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
    revalidatePath("/");
    return NextResponse.json(createUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const user = await client.user.findFirst({
    include: {
      posts: true,
    },
  });

  revalidatePath("/");
  return NextResponse.json(user, { status: 200 });
}