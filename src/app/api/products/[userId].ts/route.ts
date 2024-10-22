import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(res: any) {
  const request = await res.json();

  const { userId } = request;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        shares: {
          where: {
            userId: userId,
          },
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Failed to retrieve users" });
  }
}
