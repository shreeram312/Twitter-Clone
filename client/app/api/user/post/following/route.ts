import client from "@/libs/prismadb";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);
  if (!userId) {
    return NextResponse.json({ error: "Not Authorized" }, { status: 403 });
  }

  const existingUser = await client.user.findUnique({
    where: {
      userAuthId: userId,
    },

    select: {
      followingIds: true,
    },
  });

  if (!existingUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const { followingIds } = existingUser;
  const posts = await client.post.findMany({
    where: {
      userId: {
        in: followingIds,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });

  return NextResponse.json(posts);
}
