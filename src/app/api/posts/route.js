import connectMongo from "@/lib";
import Posts from "../../../../model/posts";
import { NextResponse } from "next/server";
// Create post api
export async function POST(req) {
  const { title, description ,tags} = await req.json();
  await connectMongo();
  await Posts.create({ title, description ,tags});
  return NextResponse.json(
    { success: true, message: "Post created ..." },
    { status: 201 }
  );
}
//All posts
export async function GET() {
  await connectMongo();
  const result = await Posts.find();
  return NextResponse.json(
    { success: true, message: "Post created ...", topic: result },
    { status: 201 }
  );
}


