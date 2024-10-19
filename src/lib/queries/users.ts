import type { User } from "@prisma/client";
import prisma from "../db";

import { notFound } from "next/navigation";

export async function fetchUsers(): Promise<User[]> {
  // Function to fetch all users from the database.
  const users = await prisma.user.findMany({
    orderBy: [
      {
        updatedAt: "desc",
      },
    ],
  });

  return users;
}

export async function fetchUserById(id: string): Promise<User | null> {
  // Function to fetch a User by its ID.
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!user) {
    notFound(); // If the post is not found, a 404 error is thrown.
  }

  return user;
}
