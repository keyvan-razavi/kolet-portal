import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  // const request = await res.json();

  try {
    const shares = await prisma.share.findMany({
      include: {
        product: true,
        user: true,
      },
    });

    return NextResponse.json(shares);
  } catch (error) {
    return NextResponse.json({ error: "Failed to retrieve products" });
  }
}
