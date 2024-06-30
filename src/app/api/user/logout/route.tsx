import { logout } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function POST() {
    try {
      await logout();
    } catch (error) {
      console.error('Error deleting cookie:', error);
      return NextResponse.json({
        statusCode: 500, // Internal Server Error
        body: JSON.stringify({ error: 'Failed to log out' }),
      });
    }
    return null;
  }
  