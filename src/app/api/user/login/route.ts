import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const res = await request.json();
  const { password, phoneNumber } = res;

  const result = await prisma.user.findUnique({
    where: { phone: phoneNumber },
  });

  if (!result || !result.password) {
    return NextResponse.json({ error: "Invalid Credentials!" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, result.password);

  if (!isPasswordCorrect) {
    return NextResponse.json({
      error: "Incorrect password. Please try again.",
    });
  }

  // Login successful, return user data or token
  return NextResponse.json({ result });
}
