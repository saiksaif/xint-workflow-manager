import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { patnerName, imageUrl} = await req.json();

    const patner = await prisma.patnersModels.create({
      data: {
        patnerName,
        imageUrl,
        code : "BANK"
      },
    });
    console.log("-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
    console.log(patner);
    return NextResponse.json(patner);
}
export async function GET() {
      const patners = await prisma.patnersModels.findMany();
      return NextResponse.json(patners);
  }