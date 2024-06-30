import { logout } from "@/lib/jwt";

export async function POST() {
    try {
      await logout();
    } catch (error) {
      console.error('Error deleting cookie:', error);
      return Response.json(
        {
          statusCode: 500,
          body: JSON.stringify({ error: 'Failed to log out' }),
        }
      );
    }
    return Response.json(
      {
        statusCode: 200,
        body: JSON.stringify({ msg : "Logged out sucessfully" }),
      }
    );
  }
  