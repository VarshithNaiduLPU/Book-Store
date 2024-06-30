import { logout } from "@/lib/jwt";

export async function POST() {
    try {
      await logout();
    } catch (error) {
      console.error('Error deleting cookie:', error);
      return {
        statusCode: 500, // Internal Server Error
        body: JSON.stringify({ error: 'Failed to log out' }),
      };
    }
    return null; // Or return an empty object
  }
  