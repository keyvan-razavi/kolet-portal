import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const res = await request.json();
  const { username, password, phoneNumber, address } = res;
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await prisma.user.create({
    data: {
      name: username,
      phone: phoneNumber,
      password: hashedPassword,
      address,
    },
  });

  return NextResponse.json({ result });
}
