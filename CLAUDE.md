# Claude Context - Template 1: Next.js Full-Stack

**This is a pre-built template for the No10 Innovation Fellowship Assessment**

---

## About Me

Senior Backend Engineer with 6+ years experience transitioning into government technology.

### Core Expertise

- **Backend**: Node.js, TypeScript, GraphQL, REST APIs, OAuth 2.0, Kafka, MongoDB, SQL
- **Infrastructure**: AWS (Lambda, Step Functions, EC2, ECS, S3, DynamoDB, CloudFormation, CloudWatch, SQS), CDK, Serverless Framework
- **Frontend**: React, TypeScript, Next.js, CSS/SCSS, Styled Components, MUI
- **Testing**: Jest, Vitest, Postman, Cypress, TDD practices
- **Architecture**: Event-Driven Architecture, System Design, Infrastructure as Code

### Key Career Achievements (Highlight These)

**The Lego Group - Senior Software Engineer (2023-Present)**

- ✨ Designed and deployed event-driven order dispatch platform migration (high-stakes production)
- ✨ Led CDK adoption across engineering department
- ✨ Designed and delivered loyalty service navigating complex cross-team dependencies
- ✨ Led authentication implementation for greenfield internal UI (Azure AD via Cognito)

**Trint Ltd - Full Stack Engineer (2021-2023)**

- ✨ Led SCIM API design using AWS Lambda with OAuth 2.0
- ✨ Delivered TDD workshops, embedded best practices into team
- ✨ Mentored junior engineers

**AND Digital - Consultant (2018-2021)**

- Built microservices with Kafka & SQL
- CI/CD pipeline design and integration testing

### My Differentiators

1. **Production migration leadership** - Successfully led high-stakes system transitions
2. **Event-driven architecture expertise** - Real-world experience at scale
3. **Cross-team dependency management** - Navigated complex organizational challenges
4. **Infrastructure as Code** - CDK champion and adopter
5. **Enterprise authentication patterns** - OAuth 2.0, Azure AD, Cognito
6. **Teaching & mentoring** - Delivered workshops, embedded best practices

---

## Assessment Details

### The Role

**No10 Innovation Fellowship - Forward Deployed Engineer**

- Build and deploy custom technical solutions at pace
- Work directly with teams to solve real-world problems using data and software
- 6-12 months contract, £85K-£200K
- High impact work on PM and Government priorities

### Assessment Format

**Date**: Tuesday 9th December 2025, 9:30-12:00
**Structure**:

- 2 hours: System design and implementation
- 30 minutes: Paired coding session
- **Tech Stack**: Python (FastAPI) + TypeScript (Next.js) OR full TypeScript solution (I'm using full TypeScript)
- **Focus**: Software engineering for system design and problem-solving

---

## Areas for Development (From Previous Feedback)

From AI Security Institute technical interview feedback:

❗ **Deepen security and backend architecture knowledge**

- Need to explicitly discuss security at each layer
- Articulate why I chose specific backend patterns

❗ **Provide more structured, senior-level reasoning**

- Don't just say WHAT - explain WHY
- Discuss trade-offs between alternatives
- "I chose X because Y, considered Z but rejected it because..."

❗ **Expand practical accessibility expertise** (CRITICAL FOR GOVERNMENT)

- **WCAG 2.1 Level AA compliance** is likely a legal requirement for public sector
- Semantic HTML (header, nav, main, article, button vs div)
- ARIA labels, roles, and landmarks where semantic HTML isn't enough
- Keyboard navigation (tab order, focus management, escape to close)
- Color contrast (4.5:1 for normal text, 3:1 for large text)
- Screen reader testing considerations
- Form labels and error messages
- Focus indicators visible
- No keyboard traps

❗ **Update familiarity with modern toolchains**

- Mention specific versions and why
- Show awareness of current best practices

---

## Template Overview

This is **Template 1** - the **PRIMARY template** for most assessment scenarios. It provides a modern Next.js full-stack architecture optimized for rapid development.

### When to Use This Template

Use this template (95% of scenarios) unless the problem is:
- Explicitly backend-heavy requiring microservices
- Requires clear API separation
- Focuses on distributed systems architecture

### Stack

- **Next.js 16** with App Router
- **React 19** (Server + Client Components)
- **TypeScript 5** (strict mode)
- **Zod 4** for validation
- **Tailwind CSS 4** for styling
- **Vitest 4** for testing
- **In-memory storage** (with PostgreSQL migration path documented)

---

## Quick Start

```bash
# Install dependencies
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

---

## How Claude Should Help During Assessment

### 1. Architecture Discussion (First 5-10 minutes)

Before writing ANY code:
1. Understand the problem requirements
2. Propose how to adapt this template
3. Explain architectural decisions and trade-offs
4. Identify security considerations
5. Plan data model
6. Help me articulate WHY this design

### 2. During Implementation

**Code Organization**
- Keep the existing folder structure: `app/api/`, `app/lib/`, `app/components/`
- Separation of concerns: Routes handle HTTP, Services (in `lib/`) contain logic
- One responsibility per file

**TypeScript Excellence**
- Strict mode enabled (already configured)
- No `any` types unless justified
- Inferred types from Zod schemas
- Async/await over promise chains

**Testing Strategy**
- Write tests alongside implementation
- Use existing Vitest setup
- Include edge cases and error scenarios

**Security (EXPLICIT)**
- Input validation with Zod at API boundaries
- Never leak internal details in errors
- Discuss security model clearly

**Accessibility (CRITICAL FOR GOVERNMENT - WCAG 2.1 AA)**
- Semantic HTML: `<button>`, `<nav>`, `<main>`, `<header>`
- Form labels: `<label htmlFor="">`
- ARIA attributes where semantic HTML insufficient
- Keyboard navigation support
- Color contrast: 4.5:1 for text, 3:1 for large text
- Always mention accessibility in discussions

**Error Handling**
- Use the existing error classes in `app/lib/errors.ts`
- Consistent error response format
- Proper HTTP status codes

### 3. Documentation as You Go

- **Update README.md** with domain-specific setup
- **Document trade-offs** in code comments
- **Fill in INTERVIEW_CHEATSHEET.md** as you build:
  - Key architectural decisions and WHY
  - Security considerations
  - Scaling strategy
  - What you'd add with more time

### 4. Communication Style

- **Explain before implementing**: Discuss approach first
- **Senior-level reasoning**: Help me articulate decisions with WHY
- **Incremental development**: Core functionality first, then iterate
- **Production mindset**: Real-world constraints (security, scale, maintenance)
- **Prepare talking points**: Help me explain for paired session

### 5. Time Management (CRITICAL)

- ⏰ **0-5 minutes**: Read problem, understand requirements
- ⏰ **5-15 minutes**: Propose architecture, discuss approach
- ⏰ **15-90 minutes**: Build core functionality with tests
- ⏰ **90-120 minutes**: Polish, error handling, prepare explanations
- **Prioritize**: Working functionality > Perfection
- Use TODO comments for what would be added with more time

---

## Government/Public Sector Context

### Likely Requirements

- **Security**: Government data handling, potential PII
- **Scalability**: Citizen-facing services = millions of users
- **Accessibility**: WCAG compliance for public services (LEGALLY REQUIRED)
- **Transparency**: Clear audit trails, explainable decisions
- **Reliability**: High availability requirements
- **Data Protection**: GDPR compliance, data residency

### Potential Problem Domains

- Citizen-facing services (appointments, applications, consultations)
- Data aggregation/analysis pipelines (cross-department metrics)
- Decision support systems (policy analysis, evidence gathering)
- Internal tools (case management, workflow automation)
- Integration challenges (legacy systems, multiple departments)

---

## Key Architectural Decisions (Pre-Made)

### Decision: Next.js Monolith

**What**: Single Next.js project with Route Handlers for API and React components for UI
**Why**: Fastest development - zero CORS setup, single deployment, Route Handlers work like Lambda functions
**Trade-off**: Less explicit separation than microservices
**Alternative considered**: Express + Vite (Template 2) for clearer API separation, but slower setup
**Production consideration**: "In a larger system, I'd evaluate separation based on team boundaries and independent scaling needs"

### Decision: In-Memory Storage

**What**: Map-based in-memory data store
**Why**: Fastest way to get working solution in 2-hour window
**Trade-off**: Data lost on restart, doesn't scale beyond single instance
**Production path**: PostgreSQL with Prisma ORM (migration path documented in code)

### Decision: Server + Client Components

**What**: Use Server Components by default, Client Components (`'use client'`) for interactivity
**Why**: Server Components reduce bundle size, improve SEO, enable server-side data fetching
**Trade-off**: Need to understand when to use each
**Talking point**: "I used Server Components for data fetching to reduce client bundle. Client Components for forms and interactivity."

---

## Security Considerations (Explain Explicitly)

### Layer 1: Input Validation
- **What**: Zod schemas on all API route handlers
- **Why**: Prevent injection attacks, ensure data integrity
- **How**: Parse request body with Zod before processing

### Layer 2: Error Handling
- **What**: Custom error classes that never leak stack traces
- **Why**: Prevent information disclosure
- **How**: Generic 500 errors in production, specific errors in development

### Layer 3: Type Safety
- **What**: TypeScript strict mode
- **Why**: Catch bugs at compile time, prevent runtime errors
- **How**: No `any` types, infer types from Zod schemas

### What's Missing (Production)
- Authentication/Authorization (NextAuth.js, Clerk)
- Rate limiting
- CSRF protection
- Security headers (Helmet equivalent)
- Environment variable validation

---

## Accessibility Checklist (Government Requirement)

This is CRITICAL for government services (WCAG 2.1 AA legally required):

- [ ] **Semantic HTML**: `<button>`, `<nav>`, `<main>`, `<header>` instead of `<div>`
- [ ] **Form labels**: All inputs have `<label htmlFor="">`
- [ ] **ARIA attributes**: Added where semantic HTML insufficient
- [ ] **Keyboard navigation**: Can navigate with Tab, submit with Enter, close with Escape
- [ ] **Focus indicators**: Visible focus states on interactive elements
- [ ] **Color contrast**: Text has 4.5:1 contrast ratio
- [ ] **Alt text**: Descriptive alt text for images
- [ ] **No keyboard traps**: Can always escape modals/dropdowns

**Talking point**: "I prioritized WCAG 2.1 AA compliance because government services have legal accessibility requirements. Used semantic HTML, proper labels, keyboard navigation, and verified color contrast."

---

## Scaling Strategy

### Current Bottlenecks
1. In-memory storage (lost on restart, single instance only)
2. No caching
3. No pagination

### Scale to 10x Traffic
1. **Database**: Migrate to PostgreSQL with read replicas and connection pooling
2. **Caching**: Add Redis for frequently accessed data
3. **CDN**: Vercel Edge Network for static assets
4. **Pagination**: Add limit/offset to list endpoints
5. **Horizontal scaling**: Deploy multiple instances behind load balancer
6. **Monitoring**: DataDog, Sentry, CloudWatch

**Talking point**: "Current bottleneck is in-memory storage and single instance. To scale 10x: PostgreSQL with read replicas, Redis caching, pagination on lists, multiple instances behind load balancer, and comprehensive monitoring."

---

## Adapting This Template During Assessment

### Step 1: Understand the Problem (0-5 minutes)
- Read requirements carefully
- Identify core entities and operations
- Ask clarifying questions if needed

### Step 2: Plan Data Model (5-10 minutes)
- Define TypeScript interfaces in `app/lib/types.ts`
- Create Zod validation schemas in `app/lib/validation.ts`
- Update `app/lib/db.ts` with your data structure

### Step 3: Build API (10-60 minutes)
- Copy the pattern from `app/api/users/`
- Create route handlers for your domain
- Implement service logic in `app/lib/`
- Add tests as you go

### Step 4: Add UI (if needed) (20-40 minutes)
- Create components in `app/components/`
- Use Client Components (`'use client'`) for forms and interactivity
- Use Server Components for data fetching
- Ensure accessibility (semantic HTML, labels, keyboard nav)

### Step 5: Polish & Prepare (10-20 minutes)
- Add TODO comments for production improvements
- Update README with domain-specific info
- Fill in INTERVIEW_CHEATSHEET.md
- Prepare talking points

---

## Example: Adapting for "Appointment Booking System"

### Data Model
```typescript
// app/lib/types.ts
interface Appointment {
  id: string;
  citizenEmail: string;
  serviceType: 'passport' | 'driving-license' | 'tax';
  appointmentDate: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}
```

### Validation
```typescript
// app/lib/validation.ts
export const createAppointmentSchema = z.object({
  citizenEmail: z.string().email(),
  serviceType: z.enum(['passport', 'driving-license', 'tax']),
  appointmentDate: z.string().datetime(),
});
```

### API Routes
```bash
# Copy the pattern
cp -r app/api/users app/api/appointments

# Update route handlers with appointment logic
```

---

## Production Checklist

Before submission:
- [ ] Core functionality working
- [ ] Tests for critical paths
- [ ] Input validation on all endpoints
- [ ] Error handling implemented
- [ ] Accessibility requirements met (WCAG AA)
- [ ] README updated
- [ ] INTERVIEW_CHEATSHEET.md filled in
- [ ] TODO comments for production improvements

---

## Common Interview Questions (Be Ready)

**"Why Next.js full-stack?"**
> "I chose Next.js because the 2-hour constraint favors rapid development. Route Handlers work like Lambda functions—familiar from my work at Lego—while keeping everything in one project eliminates CORS setup. For production at scale, I'd evaluate separation based on team boundaries and deployment needs."

**"How does security work?"**
> "Security at multiple layers: Zod validates all inputs at API boundaries preventing injection attacks, custom error classes prevent detail leaking, TypeScript adds compile-time safety. For production, I'd add authentication (NextAuth/Clerk), rate limiting, and CSRF protection."

**"How would you scale this?"**
> "Current bottleneck is in-memory storage. To scale 10x: migrate to PostgreSQL with read replicas and connection pooling, add Redis caching for hot data, implement pagination on list endpoints, and deploy multiple instances behind a load balancer."

**"What about accessibility?"**
> "Government services require WCAG 2.1 AA compliance by law. I used semantic HTML throughout (button, nav, main), proper form labels, ensured keyboard navigation, and checked color contrast."

**"What would you add with more time?"**
> [Reference TODO comments and INTERVIEW_CHEATSHEET.md]

---

## Remember

1. **Architecture discussion BEFORE coding** - Demonstrate senior-level thinking
2. **Explain WHY, not just WHAT** - Address the feedback from previous interviews
3. **Security explicit at every layer** - Don't assume it's obvious
4. **Accessibility is non-negotiable** - Government legal requirement
5. **Working > Perfect** - Time-constrained, prioritize functionality
6. **Document as you go** - Fill in INTERVIEW_CHEATSHEET.md throughout

---

## Emergency Fallback

If running out of time:
1. **Core functionality working** > Additional features
2. **Basic tests** > Comprehensive coverage
3. **Clear structure** > Perfect implementation
4. **TODO comments** for what you'd add
5. **Can articulate decisions** > Polished code

Focus on demonstrating:
- Clear architectural thinking
- Production mindset
- Senior-level reasoning
- Security awareness
- Accessibility compliance
- Testing culture
