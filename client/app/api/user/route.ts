import { NextResponse, NextRequest } from "next/server";
import client from "@/libs/prismadb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuth } from "@clerk/nextjs/server";

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
    const existingUser = await client.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email is already registered" },
        { status: 409 }
      );
    }

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

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await client.user.findUnique({
      where: { userAuthId: userId },
      include: {
        posts: {
          include: {
            comments: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Parse the request body
    const body = await req.json();
    const { coverImage, userName } = body;

    // Check if the user exists
    const existingUser = await client.user.findFirst({
      where: { userName },
    });

    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Ensure that the authenticated user is the owner of the account being updated
    if (existingUser.userAuthId !== userId) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    // Update the cover image
    const updatedUser = await client.user.update({
      where: {
        userName: userName,
      },
      data: {
        coverImage,
      },
    });

    // Return the updated user data
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Error updating cover image:", error);
    return NextResponse.json(
      { message: "Failed to update cover image" },
      { status: 500 }
    );
  }
}
