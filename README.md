# Template 1: Next.js Full-Stack

**Use this template** for most assessment scenarios - it's the fastest way to build full-stack features.

## Stack

- **Next.js 16** with App Router
- **React 19** (Server + Client Components)
- **TypeScript 5** (strict mode)
- **Zod 4** for validation
- **Tailwind CSS 4** for styling
- **Vitest 4** for testing
- **In-memory storage** (with PostgreSQL migration path documented)

## Quick Start

```bash
# Install dependencies (already done in template)
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Run tests
npm test

# Run tests with UI
npm run test:ui

# Build for production
npm run build
```

## Project Structure

```
app/
├── api/                      # API Route Handlers (like Lambda functions)
│   └── users/
│       ├── route.ts         # GET /api/users, POST /api/users
│       ├── [id]/route.ts    # GET/PATCH/DELETE /api/users/:id
│       └── __tests__/       # API tests
├── lib/                      # Shared utilities (your "services" layer)
│   ├── db.ts                # Data access layer (in-memory → PostgreSQL path)
│   ├── validation.ts        # Zod schemas
│   ├── errors.ts            # Custom error classes
│   └── __tests__/           # Unit tests
├── components/              # React components (add as needed)
├── layout.tsx               # Root layout
└── page.tsx                 # Home page
```

## Key Features Demonstrated

### ✅ Input Validation
- Zod schemas in [app/lib/validation.ts](app/lib/validation.ts)
- Type-safe validation at API boundaries
- Clear error messages

### ✅ Error Handling
- Custom error classes in [app/lib/errors.ts](app/lib/errors.ts)
- Consistent error response format
- Never leak internal details

### ✅ Testing
- Vitest with happy-dom (lightweight, fast)
- Example tests in `__tests__` folders
- Run: `npm test`

### ✅ Type Safety
- Strict TypeScript mode
- Inferred types from Zod schemas
- No `any` types

## Example API Usage

### Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "name": "John Doe", "age": 30}'
```

### Get All Users
```bash
curl http://localhost:3000/api/users
```

### Get User by ID
```bash
curl http://localhost:3000/api/users/1
```

### Update User
```bash
curl -X PATCH http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe"}'
```

### Delete User
```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## Adapting for Assessment

### 1. Replace Domain Logic
Replace the example "users" domain with your actual problem:

```bash
# Copy the pattern:
cp -r app/api/users app/api/your-domain
cp app/lib/validation.ts app/lib/your-domain-validation.ts
```

### 2. Update Data Model
Edit [app/lib/db.ts](app/lib/db.ts) with your data structure:

```typescript
export interface YourModel {
  id: string;
  // Add your fields
  createdAt: Date;
  updatedAt: Date;
}
```

### 3. Add Frontend (if needed)
Create components in `app/components/`:

```typescript
// app/components/YourComponent.tsx
'use client' // Use for interactive components

export default function YourComponent() {
  // Use Client Component for forms, state, event handlers
}
```

Or use Server Components (default) for data fetching:

```typescript
// app/components/YourList.tsx
// No 'use client' needed - it's a Server Component

export default async function YourList() {
  const data = await fetch('http://localhost:3000/api/your-domain')
  // Fetches on server, reduces client bundle
}
```

## Architecture Decisions (For Interview)

### Why Next.js Full-Stack?
**Chosen**: Next.js monolith for rapid full-stack development
**Reason**: 2-hour time constraint favors single project over separate frontend/backend
**Trade-off**: Less explicit separation than microservices
**Production consideration**: "In a larger system, I'd evaluate separation based on team boundaries and independent scaling needs"

### Why In-Memory Storage?
**Chosen**: In-memory Map for prototyping speed
**Reason**: Fastest way to get working solution in 2 hours
**Production path**: PostgreSQL with Prisma ORM (migration path documented in code)

### Why Route Handlers Over API Routes?
**Chosen**: App Router with Route Handlers (not Pages Router)
**Reason**: Latest Next.js pattern, familiar to Lambda developers, simpler mental model
**Trade-off**: Newer pattern, less Stack Overflow answers than Pages Router

## Security Considerations

### Current Implementation
- ✅ Input validation with Zod at all API boundaries
- ✅ Type-safe error responses (no detail leaking)
- ✅ Structured error handling

### Production Additions
- 🔜 Authentication/Authorization (e.g., NextAuth.js, Clerk)
- 🔜 Rate limiting (e.g., upstash/ratelimit)
- 🔜 CSRF protection
- 🔜 Security headers (next.config.ts)
- 🔜 Environment variable validation
- 🔜 SQL injection prevention (use Prisma parameterized queries)

## Scaling Strategy

### Current Bottlenecks
1. In-memory storage (lost on restart, single instance only)
2. No caching
3. No pagination

### Scale to 10x Traffic
1. **Database**: Migrate to PostgreSQL with read replicas
2. **Caching**: Add Redis for frequently accessed data
3. **CDN**: Vercel Edge Network for static assets
4. **Pagination**: Add limit/offset to list endpoints
5. **Monitoring**: Add DataDog, Sentry, CloudWatch
6. **Rate Limiting**: Prevent abuse

## Accessibility (Government Requirement)

### WCAG 2.1 AA Compliance
- Use semantic HTML (`<button>`, `<nav>`, `<main>`)
- Add proper labels to form inputs (`<label htmlFor="">`)
- Ensure keyboard navigation works (Tab, Enter, Escape)
- Check color contrast (4.5:1 for text)
- Add ARIA labels where semantic HTML insufficient

**Example:**
```tsx
// ✅ Good
<button onClick={handleClick}>Submit</button>

// ❌ Bad
<div onClick={handleClick}>Submit</div>
```

## Production Checklist

- [ ] Replace in-memory storage with PostgreSQL
- [ ] Add authentication/authorization
- [ ] Add rate limiting
- [ ] Add monitoring and logging
- [ ] Add E2E tests (Playwright)
- [ ] Add CI/CD pipeline
- [ ] Security audit (OWASP top 10)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Load testing
- [ ] Error tracking (Sentry)

## Migration to PostgreSQL

When ready to move to a real database:

```bash
# Install Prisma
npm install prisma @prisma/client
npx prisma init

# Define schema in prisma/schema.prisma
# Run migration
npx prisma migrate dev

# Replace db.ts calls with Prisma client
```

## Testing

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- validation.test.ts
```

## Talking Points for Paired Session

### "Why this architecture?"
"I chose Next.js full-stack because the 2-hour constraint favors rapid development over separation. Route Handlers work like Lambda functions—familiar to me from Lego—while keeping everything in one project eliminates CORS setup. For production at scale, I'd evaluate separation based on team boundaries."

### "How does security work?"
"Security at multiple layers: Zod validates all inputs at API boundaries preventing injection attacks, custom error classes prevent detail leaking, TypeScript adds compile-time safety. For production, I'd add authentication (NextAuth/Clerk), rate limiting, and CSRF protection."

### "How would you scale this?"
"Current bottleneck is in-memory storage. To scale 10x: migrate to PostgreSQL with read replicas and connection pooling, add Redis caching for hot data, implement pagination on list endpoints, and deploy multiple instances behind a load balancer. Would also add monitoring via DataDog and error tracking via Sentry."

### "What about accessibility?"
"Government services require WCAG 2.1 AA compliance by law. I used semantic HTML throughout (button, nav, main), proper form labels, ensured keyboard navigation, and checked color contrast. With more time I'd add screen reader testing and skip navigation links."
