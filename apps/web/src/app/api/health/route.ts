import { NextResponse } from "next/server";
import { brand } from "@/config/brand";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: brand.name,
    timestamp: new Date().toISOString(),
  });
}
