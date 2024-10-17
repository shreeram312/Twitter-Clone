"use server";
import client from "@/libs/prismadb";

export default async function FetchPosts(id: string | "") {
  if (!id) {
    return null;
  }
  const user = await client.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
    return null;
  }
  const res = await client.post.findMany({
    where: {
      userId: user.id,
    },

    include: {
      user: {
        select: {
          id: true,
          userName: true,
          name: true,
          profileImage: true,
          createdAt: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res;
}
