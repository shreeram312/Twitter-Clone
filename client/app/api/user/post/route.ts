import client from "@/libs/prismadb";
import { getAuth } from "@clerk/nextjs/server";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

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

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json({ error: "Not Authorized" }, { status: 403 });
    }

    const existingUser = await client.user.findUnique({
      where: {
        userAuthId: userId,
      },
    });

    if (!existingUser) {
      return NextResponse.json({ error: "Not There" }, { status: 411 });
    }

    const getAllPosts = await client.post.findMany({
      where: {
        userId: existingUser.id,
      },
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
        comments: true,
      },
    });
    revalidatePath("/");
    return NextResponse.json(getAllPosts);
  } catch (e) {
    console.log(e);
  }
}
