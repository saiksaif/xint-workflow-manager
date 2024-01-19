import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    let data = {
        "sportsCars": [
            {
                "company": "Ferrari",
                "name": "488 GTB",
                "model": "2018",
                "condition": "Excellent",
                "engineType": "Twin-turbocharged V8",
                "fuelType": "Gasoline",
                "noOfSeats": 2
            },
            {
                "company": "Lamborghini",
                "name": "Huracan",
                "model": "2019",
                "condition": "Good",
                "engineType": "Naturally aspirated V10",
                "fuelType": "Gasoline",
                "noOfSeats": 2
            },
            {
                "company": "Porsche",
                "name": "911 Turbo",
                "model": "2020",
                "condition": "Like new",
                "engineType": "Twin-turbocharged flat-6",
                "fuelType": "Gasoline",
                "noOfSeats": 4
            }
        ]
    }

    return NextResponse.json(data.sportsCars);
}