import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/app/lib/db";
import { createUserSchema } from "@/app/lib/validation";
import { formatErrorResponse, ValidationError } from "@/app/lib/errors";

/**
 * GET /api/users - List all users
 *
 * Security: Add authentication/authorization in production
 * Scalability: Add pagination, filtering, and caching
 */
export async function GET() {
  try {
    const users = db.getAllUsers();

    return NextResponse.json({
      data: users,
      count: users.length,
    });
  } catch (error) {
    const formatted = formatErrorResponse(error);
    return NextResponse.json(formatted, { status: formatted.error.statusCode });
  }
}

/**
 * POST /api/users - Create a new user
 *
 * Security: Input validation with Zod
 * Example request body:
 * {
 *   "email": "user@example.com",
 *   "name": "John Doe",
 *   "age": 30
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validated = createUserSchema.parse(body);

    // Create user
    const user = db.createUser(validated);

    return NextResponse.json({ data: user }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formatted = formatErrorResponse(
        new ValidationError(error.issues.map((e) => e.message).join(", "))
      );
      return NextResponse.json(formatted, {
        status: formatted.error.statusCode,
      });
    }

    const formatted = formatErrorResponse(error);
    return NextResponse.json(formatted, { status: formatted.error.statusCode });
  }
}
