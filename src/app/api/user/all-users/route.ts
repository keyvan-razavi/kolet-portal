import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(res: any) {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Failed to retrieve users" });
  }
}
