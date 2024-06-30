import { logout } from "@/lib/jwt";

export async function POST() {
    try {
      await logout();
    } catch (error) {
      console.error('Error deleting cookie:', error);
      return null;
    }
    return null;
  }
  