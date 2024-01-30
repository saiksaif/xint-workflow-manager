import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { patnerName, imageUrl, code} = await req.json();

    const patner = await prisma.patnersModels.create({
      data: {
        patnerName,
        imageUrl,
        code: "IT"
      },
    });
    return NextResponse.json(patner);
}
export async function GET() {
      const patner = await prisma.patnersModels.findMany();
      return NextResponse.json(patner);
  }