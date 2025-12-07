import { z } from "zod";

/**
 * Example validation schemas using Zod
 * Add your domain-specific schemas here during assessment
 */

export const createUserSchema = z.object({
  email: z.email("Invalid email address"),
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  age: z.number().int().positive().optional(),
});

export const updateUserSchema = z.object({
  email: z.email("Invalid email address").optional(),
  name: z.string().min(1).max(100).optional(),
  age: z.number().int().positive().optional(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
