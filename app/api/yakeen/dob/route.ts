import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { nid, dob, data} = await req.json();

    const yakeen = await prisma.yakeenData.create({
      data: {
        nid,
        dob,
        data
      },
    });
    return NextResponse.json(yakeen);
}
export async function GET() {
      const yakeen = await prisma.yakeenData.findMany();
      return NextResponse.json(yakeen);
  }