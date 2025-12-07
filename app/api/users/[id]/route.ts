import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/app/lib/db";
import { updateUserSchema } from "@/app/lib/validation";
import {
  formatErrorResponse,
  NotFoundError,
  ValidationError,
} from "@/app/lib/errors";

/**
 * GET /api/users/[id] - Get user by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const user = db.getUserById(id);

    if (!user) {
      throw new NotFoundError("User");
    }

    return NextResponse.json({ data: user });
  } catch (error) {
    const formatted = formatErrorResponse(error);
    return NextResponse.json(formatted, { status: formatted.error.statusCode });
  }
}

/**
 * PATCH /api/users/[id] - Update user
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Validate input
    const validated = updateUserSchema.parse(body);

    // Update user
    const user = db.updateUser(id, validated);

    if (!user) {
      throw new NotFoundError("User");
    }

    return NextResponse.json({ data: user });
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

/**
 * DELETE /api/users/[id] - Delete user
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleted = db.deleteUser(id);

    if (!deleted) {
      throw new NotFoundError("User");
    }

    return NextResponse.json({ success: true }, { status: 204 });
  } catch (error) {
    const formatted = formatErrorResponse(error);
    return NextResponse.json(formatted, { status: formatted.error.statusCode });
  }
}
