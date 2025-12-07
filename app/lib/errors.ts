/**
 * Custom error classes for consistent error handling
 * Prevents leaking implementation details to clients
 */

export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400, "VALIDATION_ERROR");
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404, "NOT_FOUND");
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized") {
    super(message, 401, "UNAUTHORIZED");
  }
}

/**
 * Format error response for API
 * Never expose stack traces or internal details in production
 */
export function formatErrorResponse(error: unknown) {
  if (error instanceof AppError) {
    return {
      error: {
        message: error.message,
        code: error.code,
        statusCode: error.statusCode,
      },
    };
  }

  // For unknown errors, return generic message
  // TODO: Add logging here (e.g., to CloudWatch, Sentry)
  console.error("Unexpected error:", error);

  return {
    error: {
      message: "Internal server error",
      code: "INTERNAL_ERROR",
      statusCode: 500,
    },
  };
}
