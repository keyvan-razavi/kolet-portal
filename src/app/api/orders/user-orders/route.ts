import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(res: any) {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        cartItem: {
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: "Failed to retrieve users" });
  }
}
