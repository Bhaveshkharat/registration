import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { connectDB } from "@/lib/db";
import { createToken } from "@/lib/auth";

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();
  const user = await User.findOne({ email });

  if (!user)
    return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });

  const match = await bcrypt.compare(password, user.password);

  if (!match)
    return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });

  const token = createToken(user);

  const response = NextResponse.json({ message: "Login successful" });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    path: "/"
  });

  return response;
}