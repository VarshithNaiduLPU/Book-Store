import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  if (request.nextUrl.pathname !== "/login" || request.nextUrl.pathname !== "/login") {
  }
}
