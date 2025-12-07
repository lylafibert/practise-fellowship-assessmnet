import { describe, it, expect } from "vitest";
import { createUserSchema, updateUserSchema } from "../validation";

describe("createUserSchema", () => {
  it("should validate valid user data", () => {
    const validData = {
      email: "test@example.com",
      name: "John Doe",
      age: 30,
    };

    const result = createUserSchema.parse(validData);
    expect(result).toEqual(validData);
  });

  it("should validate user without optional age", () => {
    const validData = {
      email: "test@example.com",
      name: "John Doe",
    };

    const result = createUserSchema.parse(validData);
    expect(result).toEqual(validData);
  });

  it("should reject invalid email", () => {
    const invalidData = {
      email: "not-an-email",
      name: "John Doe",
    };

    expect(() => createUserSchema.parse(invalidData)).toThrow();
  });

  it("should reject empty name", () => {
    const invalidData = {
      email: "test@example.com",
      name: "",
    };

    expect(() => createUserSchema.parse(invalidData)).toThrow("Name is required");
  });

  it("should reject negative age", () => {
    const invalidData = {
      email: "test@example.com",
      name: "John Doe",
      age: -5,
    };

    expect(() => createUserSchema.parse(invalidData)).toThrow();
  });
});

describe("updateUserSchema", () => {
  it("should validate partial updates", () => {
    const validData = {
      name: "Jane Doe",
    };

    const result = updateUserSchema.parse(validData);
    expect(result).toEqual(validData);
  });

  it("should validate empty object", () => {
    const result = updateUserSchema.parse({});
    expect(result).toEqual({});
  });

  it("should reject invalid email in update", () => {
    const invalidData = {
      email: "not-an-email",
    };

    expect(() => updateUserSchema.parse(invalidData)).toThrow();
  });
});
