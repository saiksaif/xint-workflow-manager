import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { nid, licexpiry, data} = await req.json();

    const yakeen = await prisma.yakeenDataTwo.create({
      data: {
        nid,
        licexpiry,
        data
      },
    });
    return NextResponse.json(yakeen);
}
export async function GET() {
      const yakeen = await prisma.yakeenDataTwo.findMany();
      return NextResponse.json(yakeen);
  }