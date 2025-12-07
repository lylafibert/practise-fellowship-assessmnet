import { describe, it, expect, beforeEach } from "vitest";
import { GET, POST } from "../route";
import { db } from "@/app/lib/db";

// Helper to create mock NextRequest
function createMockRequest(body?: unknown): Request {
  return {
    json: async () => body,
  } as Request;
}

describe("GET /api/users", () => {
  beforeEach(() => {
    // Clear database before each test
    // In production, use a test database or transactions
    (db as any).users.clear();
    (db as any).userIdCounter = 1;
  });

  it("should return empty array when no users", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ data: [], count: 0 });
  });

  it("should return all users", async () => {
    // Seed data
    db.createUser({ email: "test1@example.com", name: "User 1" });
    db.createUser({ email: "test2@example.com", name: "User 2" });

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.count).toBe(2);
    expect(data.data).toHaveLength(2);
  });
});

describe("POST /api/users", () => {
  beforeEach(() => {
    (db as any).users.clear();
    (db as any).userIdCounter = 1;
  });

  it("should create user with valid data", async () => {
    const requestBody = {
      email: "new@example.com",
      name: "New User",
      age: 25,
    };

    const request = createMockRequest(requestBody);
    const response = await POST(request as any);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.data).toMatchObject({
      email: "new@example.com",
      name: "New User",
      age: 25,
    });
    expect(data.data.id).toBeDefined();
    expect(data.data.createdAt).toBeDefined();
  });

  it("should create user without optional age", async () => {
    const requestBody = {
      email: "new@example.com",
      name: "New User",
    };

    const request = createMockRequest(requestBody);
    const response = await POST(request as any);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.data.age).toBeUndefined();
  });

  it("should reject invalid email", async () => {
    const requestBody = {
      email: "not-an-email",
      name: "New User",
    };

    const request = createMockRequest(requestBody);
    const response = await POST(request as any);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error.code).toBe("VALIDATION_ERROR");
  });

  it("should reject missing required fields", async () => {
    const requestBody = {
      email: "test@example.com",
    };

    const request = createMockRequest(requestBody);
    const response = await POST(request as any);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error.code).toBe("VALIDATION_ERROR");
  });
});
