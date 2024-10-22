import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(res: any) {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to retrieve users" });
  }
}
