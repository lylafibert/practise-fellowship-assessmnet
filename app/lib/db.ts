/**
 * In-memory data store for rapid prototyping
 *
 * PRODUCTION: Replace with PostgreSQL + Prisma
 * Migration path:
 * 1. npm install prisma @prisma/client
 * 2. npx prisma init
 * 3. Define schema in prisma/schema.prisma
 * 4. Replace Map with Prisma client calls
 */

export interface User {
  id: string;
  email: string;
  name: string;
  age?: number;
  createdAt: Date;
  updatedAt: Date;
}

class Database {
  private users: Map<string, User> = new Map();
  private userIdCounter = 1;

  // User operations
  createUser(data: Omit<User, "id" | "createdAt" | "updatedAt">): User {
    const id = String(this.userIdCounter++);
    const now = new Date();
    const user: User = {
      id,
      ...data,
      createdAt: now,
      updatedAt: now,
    };
    this.users.set(id, user);
    return user;
  }

  getUserById(id: string): User | undefined {
    return this.users.get(id);
  }

  getAllUsers(): User[] {
    return Array.from(this.users.values());
  }

  updateUser(id: string, data: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>): User | undefined {
    const user = this.users.get(id);
    if (!user) return undefined;

    const updated: User = {
      ...user,
      ...data,
      updatedAt: new Date(),
    };
    this.users.set(id, updated);
    return updated;
  }

  deleteUser(id: string): boolean {
    return this.users.delete(id);
  }

  // Add more domain-specific methods as needed
}

// Singleton instance
export const db = new Database();
