# Interview Cheatsheet - Template 1: Next.js Full-Stack

**Fill this out as you build during the 2-hour assessment. Use it as reference for the paired coding session.**

---

## Template Choice ✅ PRE-FILLED

**Selected Template:** ✅ Template 1: Next.js Full-Stack

**Why I chose this (DEFAULT ANSWER - customize if problem requires it):**
```
"I chose Next.js full-stack because it's the fastest way to build working functionality in a 2-hour window. The monolith approach eliminates CORS configuration, simplifies deployment, and Route Handlers work like Lambda functions—a familiar mental model from my work at Lego.

For this problem, the tight integration between frontend and backend made a monolith the pragmatic choice. In production at scale, I'd evaluate separation based on team boundaries and independent scaling needs."
```

**What I considered:**
```
"I considered Express + Vite (Template 2) for clearer API separation, but the added complexity (CORS setup, two projects, two deployments) wasn't justified for this problem's requirements. Next.js gives me full-stack capabilities with minimal overhead."
```

---

## Technology Choices & Rationale ✅ PRE-FILLED

### Core Stack
- **Next.js 16 / React 19**: Latest stable versions (Next.js 16 released 2024, React 19 stable Nov 2024)
- **TypeScript 5**: Strict mode for type safety and better DX
- **Zod 4**: Schema validation at API boundaries (latest major version)
- **Tailwind CSS 4**: Utility-first CSS for rapid UI development
- **Vitest 4**: Modern, fast test runner with happy-dom for lightweight DOM testing

### Why These Versions
```
"Used latest stable versions (not RC/beta) to demonstrate production judgment and awareness of modern tooling.

Next.js 16 is current and stable—shows I'm up to date with the ecosystem.
React 19 just went stable (Nov 2024)—demonstrates I'm current but avoid bleeding edge.
TypeScript 5 for improved type inference and performance.
Vitest over Jest for faster execution, modern ESM support, and better DX.
happy-dom over jsdom for lighter weight and faster test runs.
Zod for runtime type safety that complements TypeScript's compile-time checking."
```

**Why Next.js Route Handlers over Express:**
```
"Route Handlers in Next.js App Router work like Lambda functions—very familiar from my serverless work at Lego. I get the same function-per-route mental model, TypeScript support out of the box, and integrated deployment. The learning curve was minimal and development was faster than setting up Express + CORS."
```

---

## Key Architectural Decisions ✅ PRE-FILLED + FILL IN

### Decision 1: Next.js Monolith ✅ PRE-FILLED
**What**: Single Next.js project with Route Handlers for API and React components for UI

**Why**: Fastest development path for 2-hour assessment - zero CORS setup, single project, single deployment

**Trade-off**: Less explicit separation than microservices, harder to scale frontend/backend independently

**Alternative considered**: Express + Vite (Template 2) for clearer API separation, but setup overhead wasn't justified

**Production consideration**: "In a larger system with multiple teams or need for independent scaling, I'd evaluate separation. For this problem size, monolith is appropriate."

---

### Decision 2: In-Memory Storage ✅ PRE-FILLED
**What**: Map-based in-memory data store (see `app/lib/db.ts`)

**Why**: Fastest way to get working solution—no database setup, migrations, or connection management

**Trade-off**: Data lost on restart, doesn't scale beyond single instance, no persistence

**Production path**: PostgreSQL with Prisma ORM (migration path documented in code comments)

**Why PostgreSQL for production**: "ACID compliance for data integrity, relational structure fits most government use cases, Prisma provides type-safe queries, connection pooling via PgBouncer for scale"

---

### Decision 3: Server + Client Components ✅ PRE-FILLED
**What**: Use Server Components by default, Client Components (`'use client'`) for interactivity

**Why**: Server Components reduce client bundle size, improve initial page load, enable server-side data fetching

**Trade-off**: Need to understand React Server Component model and when to use each

**When I used each**:
- **Server Components**: [FILL IN - e.g., "Data fetching in list views, static content"]
- **Client Components**: [FILL IN - e.g., "Forms with state, interactive modals, event handlers"]

---

### Decision 4: [Your Domain-Specific Decision] - FILL IN
**What**:

**Why**:

**Trade-off**:

**Alternative considered**:

---

### Decision 5: [Your Domain-Specific Decision] - FILL IN
**What**:

**Why**:

**Trade-off**:

**Alternative considered**:

---

## Security Considerations ✅ PRE-FILLED + EXPAND

### Layer 1: Input Validation ✅ PRE-FILLED
**What**: Zod schemas on all API Route Handlers (see `app/lib/validation.ts`)

**Why**: Prevent injection attacks, ensure data integrity at API boundaries, type safety at runtime

**How implemented**: `const validated = schema.parse(req.body)` - throws typed error if invalid

**What endpoints validated**: [FILL IN - e.g., "POST /api/users, PATCH /api/users/:id"]

---

### Layer 2: Error Handling ✅ PRE-FILLED
**What**: Custom error classes (see `app/lib/errors.ts`) - never leak stack traces

**Why**: Prevent information disclosure about internals, provide user-friendly errors

**How implemented**: Operational errors (404, 409) return specific messages, unexpected errors return generic 500s

**Example**: [FILL IN - e.g., "NotFoundError returns 404 with safe message, but internal errors return generic 500"]

---

### Layer 3: Type Safety ✅ PRE-FILLED
**What**: TypeScript strict mode, no `any` types

**Why**: Catch bugs at compile time, prevent runtime type errors

**How implemented**: `tsconfig.json` has `strict: true`, types inferred from Zod schemas

---

### Layer 4: [Your Security Measure] - FILL IN
**What**:

**Why**:

**How implemented**:

---

### What's Missing for Production ✅ PRE-FILLED
```
"Current security is good for MVP, but production would need:

1. Authentication/Authorization: NextAuth.js or Clerk for user sessions and role-based access
2. Rate limiting: Prevent API abuse (e.g., upstash/ratelimit for serverless)
3. CSRF protection: For state-changing operations
4. Security headers: Content Security Policy, X-Frame-Options (via next.config.ts)
5. Environment variable validation: Zod schema for env vars on startup
6. SQL injection prevention: When migrating to PostgreSQL, Prisma uses parameterized queries
7. Audit logging: Track who did what and when (especially for government compliance)"
```

---

## Accessibility ✅ PRE-FILLED + DOCUMENT WHAT YOU DID

### Why This Matters
```
"Government/public sector services must meet WCAG 2.1 Level AA by law. This is non-negotiable for citizen-facing applications. 1 in 5 people in the UK have a disability, and the GDS audits compliance."
```

### Accessibility Checklist

- [ ] **Semantic HTML**: Used `<button>`, `<nav>`, `<main>`, `<header>`, `<article>` instead of `<div>`
- [ ] **Form Labels**: All inputs have associated `<label htmlFor="">`
- [ ] **ARIA Attributes**: Added where semantic HTML insufficient (e.g., `aria-label` on icon buttons)
- [ ] **Keyboard Navigation**: Can navigate entire app with keyboard (Tab, Shift+Tab, Enter, Escape)
- [ ] **Focus Indicators**: Visible focus states on interactive elements (`:focus-visible`)
- [ ] **Color Contrast**: Text has 4.5:1 contrast ratio (checked with tool)
- [ ] **Alt Text**: Images have descriptive alt text
- [ ] **No Keyboard Traps**: Can always escape from modals/dropdowns with Escape or Tab
- [ ] **Screen Reader**: Considered how screen reader would announce content

### What I Implemented - FILL IN AS YOU BUILD
```
[Example - customize based on what you actually built]

- Used semantic <button> elements for all interactive controls
- Added aria-label="Close dialog" to modal close button
- Ensured keyboard users can navigate form with Tab and submit with Enter
- Color contrast checked with WebAIM tool - all text meets WCAG AA standards (4.5:1)
- Form errors announced to screen readers with role="alert"
- Focus management: Modal traps focus, Escape key closes it
```

### Accessibility Talking Points ✅ PRE-FILLED
```
"I prioritized accessibility because this is a government service and WCAG 2.1 AA compliance is legally required.

Specifically:
- Used semantic HTML (button, nav, main) for proper document structure
- All form inputs have associated labels for screen readers
- Keyboard navigation works throughout - users can Tab through the app and submit with Enter
- Color contrast meets WCAG AA standards (4.5:1 minimum)
- [Add your specific implementations here]

With more time, I'd add:
- Screen reader testing with NVDA/JAWS
- Skip navigation links for keyboard users
- Reduced motion preferences (prefers-reduced-motion)
- Full keyboard shortcut support
- Automated accessibility testing (axe-core in CI/CD)"
```

---

## Scaling Strategy ✅ PRE-FILLED + CUSTOMIZE

### Current Bottlenecks
1. **In-memory storage**: Data lost on restart, single instance limitation
2. **No caching**: Every request hits data layer
3. **No pagination**: List endpoints return all records
4. [FILL IN - any domain-specific bottlenecks]

### How to Scale to 10x Traffic ✅ PRE-FILLED
```
"Current bottleneck is in-memory storage and single instance deployment.

To scale to 10x traffic:

1. **Database**: Migrate to PostgreSQL with:
   - Read replicas for read-heavy workloads
   - Connection pooling (PgBouncer) to handle concurrent connections
   - Indexes on frequently queried fields
   - Prepared statements via Prisma

2. **Caching**: Add Redis for:
   - Frequently accessed data (e.g., user sessions, lookup tables)
   - Cache-aside pattern with TTL
   - Reduce database load by 60-80%

3. **Horizontal Scaling**:
   - Deploy multiple Next.js instances behind load balancer
   - Stateless application design (sessions in Redis/database)
   - Auto-scaling based on CPU/memory

4. **Pagination**:
   - Limit/offset or cursor-based pagination on list endpoints
   - Prevent loading thousands of records

5. **CDN**:
   - Vercel Edge Network for static assets and API responses (if cacheable)
   - Reduces origin server load

6. **Monitoring**:
   - DataDog or CloudWatch for metrics (request rate, latency, errors)
   - Sentry for error tracking
   - Identify bottlenecks with APM

7. [Add domain-specific scaling strategies]
```

### Production Considerations ✅ PRE-FILLED
- **Monitoring**: DataDog/CloudWatch metrics, Sentry error tracking, structured logging
- **Logging**: Structured JSON logs with request IDs for distributed tracing
- **Rate Limiting**: Prevent abuse (e.g., 100 requests/min per IP)
- **Caching Strategy**: Cache frequently accessed data in Redis with appropriate TTLs
- [FILL IN - domain-specific considerations]

---

## Data Model & Storage

### Data Structure - FILL IN BASED ON YOUR DOMAIN
```typescript
// Example - replace with your actual models

interface YourModel {
  id: string;
  // Your fields here
  createdAt: Date;
  updatedAt: Date;
}
```

### Storage Choice ✅ PRE-FILLED
**Current**: In-memory (Map/Array in `app/lib/db.ts`)

**Why**: Speed for 2-hour assessment, zero setup

**Production**: PostgreSQL with Prisma ORM

**Migration Path**:
```
"Currently using in-memory Map for rapid prototyping.

In production, this would be PostgreSQL because:
- ACID compliance for data integrity (critical for government data)
- Relational structure fits the domain model
- Prisma ORM provides type-safe database access (auto-generated types from schema)
- Built-in connection pooling and query optimization
- Migration tooling for schema evolution

Migration steps:
1. npm install @prisma/client prisma
2. Define schema in prisma/schema.prisma
3. Run migrations: npx prisma migrate dev
4. Replace app/lib/db.ts Map with Prisma Client calls
5. Estimated effort: 2-3 hours"
```

---

## Testing Strategy

### What I Tested - FILL IN AS YOU GO
- [ ] [e.g., "POST /api/users validates email format"]
- [ ] [e.g., "GET /api/users/:id returns 404 for missing user"]
- [ ] [e.g., "Service layer handles duplicate email gracefully"]

### Test Coverage
- **Unit tests**: [FILL IN - e.g., "Validation schemas, service layer logic"]
- **Integration tests**: [FILL IN - e.g., "API route handlers"]
- **Edge cases**: [FILL IN - e.g., "Invalid inputs, missing data, duplicates"]

### Testing Talking Points
```
"I focused testing on critical paths: [list them - e.g., user creation, validation, error handling].

Used Vitest with happy-dom for fast, lightweight tests.

Tested at two levels:
1. Unit tests for business logic (service layer)
2. Integration tests for API routes (full request/response cycle)

Didn't test [X] due to time constraints, but would add in production:
- E2E tests with Playwright for user flows
- Load testing to identify performance bottlenecks
- Security testing (OWASP top 10)
- Accessibility testing (axe-core automated checks)"
```

---

## What I'd Add With More Time

### Next 2 Hours - FILL IN BASED ON YOUR WORK
- [ ] [e.g., "Add update/delete endpoints"]
- [ ] [e.g., "Implement pagination on list view"]
- [ ] [e.g., "Add search/filter functionality"]

### Production Readiness ✅ COMMON ITEMS
- [ ] Migrate to PostgreSQL with Prisma
- [ ] Add authentication (NextAuth.js or Clerk)
- [ ] Implement authorization/RBAC
- [ ] Rate limiting and request throttling
- [ ] Comprehensive error handling and logging (Winston)
- [ ] API documentation (OpenAPI/Swagger)
- [ ] E2E tests with Playwright
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Monitoring and alerting (DataDog, Sentry)
- [ ] Performance optimization (React.lazy, code splitting)
- [ ] Accessibility audit with real screen reader testing
- [ ] Security hardening (CSP headers, CSRF tokens)
- [ ] Database migrations and seeding
- [ ] Environment variable validation (Zod schema)
- [FILL IN - domain-specific items]

---

## Folder Structure & Code Organization - FILL IN BASED ON WHAT YOU BUILT

```
[Document your actual structure - example below]

app/
├── api/                    # API Route Handlers (backend)
│   └── [your-domain]/
│       ├── route.ts       # GET /api/[domain], POST /api/[domain]
│       ├── [id]/route.ts  # GET/PATCH/DELETE /api/[domain]/:id
│       └── __tests__/     # API integration tests
├── lib/                   # Shared utilities (service layer)
│   ├── db.ts             # Data access layer
│   ├── validation.ts     # Zod schemas
│   ├── errors.ts         # Custom error classes
│   └── __tests__/        # Unit tests
├── components/           # React components (if you added UI)
│   └── [YourComponent].tsx
├── layout.tsx            # Root layout
└── page.tsx              # Home page

Separation of concerns:
- Routes (app/api/*): HTTP layer - validation, response formatting
- Services (app/lib/*): Business logic
- Data layer (app/lib/db.ts): Data access
- Types: Inferred from Zod, shared across layers
```

---

## Quick Talking Points for Paired Session

### Opening Statement - CUSTOMIZE THIS
```
"I built [description of what you built] using Next.js 16 full-stack architecture.

The core architecture is a monolith with Route Handlers for the API and React components for the UI. I chose this because [reason specific to problem].

Let me walk you through the key decisions..."
```

### Key Points to Hit ✅ USE THESE
1. **Architecture**: "I chose Next.js monolith because [faster development/problem fit]. Considered Express + Vite but [overhead wasn't justified]."

2. **Accessibility**: "WCAG 2.1 AA compliant - semantic HTML, keyboard navigation, proper labels, verified color contrast. This is legally required for government services."

3. **Security**: "Security at every layer: Zod input validation prevents injection, custom error classes prevent detail leaking, TypeScript adds compile-time safety. Production would add auth, rate limiting, and security headers."

4. **Scalability**: "Current bottleneck is in-memory storage. To scale 10x: PostgreSQL with read replicas, Redis caching, horizontal scaling behind load balancer, pagination, and monitoring."

5. **Testing**: "Focused tests on critical paths: [list them]. Used Vitest for speed. Would add E2E and accessibility testing with more time."

6. **Production**: "This is MVP. For production, I'd add: PostgreSQL, authentication, monitoring, rate limiting, and comprehensive testing."

---

## Common Questions & Answers

### Q: "Why did you choose this architecture?"
```
"I chose Next.js full-stack because the 2-hour time constraint favored rapid development over explicit separation. Route Handlers work like Lambda functions—familiar from my work at Lego—while keeping everything in one project eliminates CORS setup and deployment complexity.

For this specific problem, [customize: tight frontend/backend integration / straightforward CRUD / etc.] made a monolith the pragmatic choice.

In production at scale, I'd evaluate separation based on team boundaries and independent scaling needs. If we had multiple frontends or separate teams, I'd consider the Express + Vite approach (Template 2)."
```

### Q: "How would you scale this to millions of users?"
```
[Reference "Scaling Strategy" section above - be specific about bottlenecks and solutions]
```

### Q: "What security measures did you implement?"
```
[Reference "Security Considerations" section - discuss each layer explicitly]
```

### Q: "How did you ensure accessibility?"
```
"I prioritized WCAG 2.1 AA compliance because government services have legal accessibility requirements.

Specifically: [list what you actually implemented from checklist above]

With more time I'd add screen reader testing with NVDA/JAWS, skip navigation links, and automated accessibility testing in CI/CD."
```

### Q: "What would you do differently with more time?"
```
[Reference "What I'd Add With More Time" section]
```

### Q: "Why these technology choices?" ✅ PRE-FILLED
```
"Used modern, stable versions - Next.js 16, React 19, TypeScript 5, Vitest 4.

This demonstrates I'm current with tooling while maintaining production judgment (avoided RC/beta).

Vitest over Jest for faster execution and better ESM support.
happy-dom over jsdom for lightweight DOM testing.
Zod for runtime type safety that complements TypeScript.
Tailwind for rapid UI development without writing custom CSS."
```

### Q: "How does your error handling work?"
```
[Explain your approach - reference app/lib/errors.ts and how routes use it]
```

---

## Answer Template (Use This Format) ✅

**Structure ALL answers like this:**

"I chose **[approach X]** because **[reason Y]**.

I considered **[alternative Z]** but decided against it because **[trade-off consideration]**.

In a production environment, I would also add **[monitoring/caching/rate limiting/etc]**."

---

## Time Management Notes

### What I Completed - CHECK OFF AS YOU GO
- [ ] Core functionality working
- [ ] Tests for critical paths
- [ ] Error handling
- [ ] Input validation
- [ ] Accessibility requirements (semantic HTML, labels, keyboard nav)
- [ ] Documentation (README updated)
- [ ] INTERVIEW_CHEATSHEET.md filled in

### What I Didn't Get To - BE HONEST
- [FILL IN - e.g., "Didn't add pagination", "Frontend is basic", etc.]

### Trade-offs Made - BE READY TO JUSTIFY
```
[Example: "Prioritized working API with tests over polished UI due to time constraints. Demonstrated backend expertise which is my strength and more critical for the role."]
```

---

## Lessons Learned / Notes to Self - FILL IN AFTER

```
[Add notes during/after assessment about:
- What went well
- What you'd do differently
- Time sinks to avoid
- Things that saved time]
```

---

## Pre-Assessment Checklist ✅

Before the assessment starts:
- [x] Template 1 installed and working (npm run dev, npm test)
- [ ] Read CLAUDE.md for context
- [ ] Read template README.md
- [ ] Know the answer template format
- [ ] Ready to fill this cheatsheet as I go
- [ ] Understand Next.js Route Handlers pattern
- [ ] Know when to use Server vs Client Components
- [ ] WCAG 2.1 AA requirements fresh in mind

---

## Assessment Day Workflow ✅

1. **0-5 min**: Read problem, understand requirements
2. **5-15 min**: Design architecture, fill "Key Architectural Decisions"
3. **15-90 min**: Build + test, fill sections as you go (especially security, accessibility)
4. **90-120 min**: Polish, complete "What I'd Add", prepare talking points
5. **During paired session**: Reference this cheatsheet for talking points
