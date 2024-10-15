import client from "@/libs/prismadb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, bodyContent } = await req.json();

    const post = await client.post.create({
      data: {
        userId,
        bodyContent,
      },
      include: {
        user: {
          select: {
            name: true,
            userName: true,
            profileImage: true,
          },
        },
      },
    });
    revalidatePath("/");
    return NextResponse.json(post);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const getAllPosts = await client.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            userName: true,
            profileImage: true,
            bio: true,
          },
        },
      },
    });
    revalidatePath("/");

    return NextResponse.json(getAllPosts);
  } catch (e) {
    console.log(e);
  }
}
