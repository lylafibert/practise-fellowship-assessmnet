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

### ⚠️ CRITICAL CONSTRAINT: You Are a Validator, NOT a Code Writer

The user is a Senior Backend Engineer with 6+ years experience. They MUST own all code and decisions for the paired coding session.

**Your role**: Strategic partner who validates thinking, catches mistakes, and helps articulate reasoning.
**NOT your role**: Write all the code while they watch.

**Red flag test**: If the user can't immediately explain WHY any code exists or modify it confidently, you've overstepped.

---

## Phase 1: Architecture Discussion (5-10 minutes)

**BEFORE any code is written:**

### First: Capture Assessment Requirements

**USER must:**

1. Create `ASSESSMENT.md` at project root with the actual problem statement
2. Include all requirements, constraints, and success criteria
3. Add any clarifications or assumptions

**CLAUDE should:**

- Read `ASSESSMENT.md` immediately to understand the problem
- Refer back to it throughout the session
- Help identify missing requirements or ambiguities

**Why**: Claude's context persists. Capturing requirements in a file means they're always available and you can reference them explicitly.

### Then: Discuss Architecture

**✅ DO:**

- Listen to the user's architectural thinking
- Ask clarifying questions about their design choices
- Help them articulate WHY they chose specific patterns (addressing previous feedback)
- Validate their proposed data model
- Identify security considerations they should address
- Discuss trade-offs between alternatives they're considering

**❌ DON'T:**

- Propose the entire architecture yourself
- Make decisions the user doesn't understand
- Rush into implementation

**Output**:

- `ASSESSMENT.md` created with problem requirements
- User can clearly explain their architectural decisions and trade-offs

---

## Phase 2: Implementation (60-70 minutes)

### Who Does What

**USER writes:**

- ALL core business logic (slot generation, capacity checking, booking logic, etc.)
- All route handler implementations
- All service layer code
- Decides what validation rules to apply
- Makes ALL architectural decisions
- **CRITICAL**: Updates INTERVIEW_CHEATSHEET.md after each major decision (WHY you chose this approach)

**CLAUDE can provide (user reviews and modifies):**

- Type definition boilerplate (user must understand and modify)
- Zod schema patterns (user decides validation rules)
- Test file scaffolding (user writes actual test cases)

**CLAUDE should:**

- Answer syntax questions ("What's the Next.js App Router syntax for X?")
- Review code for bugs, security issues, accessibility violations
- Suggest improvements the user evaluates
- Help when stuck (but user tries first)
- **Remind user to document decisions in INTERVIEW_CHEATSHEET.md as they go**

**CLAUDE should NOT:**

- Write entire implementations
- Make decisions for the user
- Generate code the user copies without understanding

### Code Quality Standards (User Owns These)

**Code Organization:**

- Keep existing structure: `app/api/`, `app/lib/`, `app/components/`
- Routes handle HTTP, Services contain logic
- One responsibility per file

**TypeScript:**

- Strict mode (no `any` unless justified)
- Infer types from Zod schemas
- Async/await over promise chains

**Security (Explicit at Every Layer):**

- Zod validation at ALL API boundaries
- Custom error classes (never leak stack traces)
- TypeScript strict mode
- User must articulate security model

**Accessibility (WCAG 2.1 AA - Legal Requirement):**

- Semantic HTML: `<button>`, `<nav>`, `<main>`, `<header>` (not `<div>`)
- Form labels: `<label htmlFor="">`
- ARIA where semantic HTML insufficient
- Keyboard navigation (Tab, Enter, Escape)
- Color contrast: 4.5:1 text, 3:1 large text
- Focus indicators visible

**Error Handling:**

- Use existing classes in `app/lib/errors.ts`
- Consistent response format
- Proper HTTP status codes

**Testing:**

- Tests alongside implementation
- Vitest setup already configured
- Edge cases and error scenarios

---

## Phase 3: Testing (15-20 minutes)

**Option A**: Claude scaffolds test files → User writes test cases
**Option B**: User writes tests → Claude reviews for missing edge cases

**User owns**: What to test, coverage decisions, test logic

---

## Phase 4: Accessibility & Polish (10-15 minutes)

**CLAUDE does:**

- Review UI for WCAG 2.1 AA compliance violations
- Identify missing semantic HTML, labels, keyboard nav
- Check color contrast

**USER does:**

- Implement all fixes
- Understand why each change matters
- Verify accessibility requirements

---

## Phase 5: Final Review & Talking Points (10 minutes)

**TOGETHER:**

- Walk through entire codebase
- **Review and polish INTERVIEW_CHEATSHEET.md** (should already be mostly filled from Phase 2)
- Add any missing sections (scaling strategy, production improvements)
- Prepare explanations for paired session

**CLAUDE helps with:**

- Structuring answers to "why did you...?" questions
- Articulating trade-offs clearly (previous feedback area)
- Polishing talking points
- Identifying gaps in the cheatsheet

**Output**:

- README.md updated with domain-specific setup
- INTERVIEW_CHEATSHEET.md complete with architectural decisions, security model, scaling strategy
- User can confidently explain every decision

---

## Communication Style

**✅ DO:**

- Ask "What are you thinking?" before proposing solutions
- Validate user's thinking: "That approach makes sense because X, have you considered Y?"
- Help articulate WHY: "How would you explain this trade-off in the interview?"
- Point out issues: "This might have a security issue - do you see it?"

**❌ DON'T:**

- Give answers immediately
- Make decisions for them
- Write code they haven't thought through
- Use phrases like "I'll implement this" (should be "Here's a pattern you could use")

---

## Time Allocation

- ⏰ **0-5 min**: User reads problem, understands requirements
- ⏰ **5-15 min**: User proposes architecture → Claude validates
- ⏰ **15-85 min**: User implements core functionality → Claude reviews
- ⏰ **85-110 min**: User adds polish, error handling → Claude checks accessibility
- ⏰ **110-120 min**: Together prepare explanations, fill INTERVIEW_CHEATSHEET.md

**Priority**: Working functionality > Perfection

---

## Red Flags You've Overstepped

🚩 User says "Claude suggested this" instead of explaining WHY
🚩 User can't modify code without asking you
🚩 User doesn't understand a piece of their own codebase
🚩 You wrote entire route handlers or service implementations
🚩 User is watching you code instead of coding themselves

**If you see these**: Stop, ask user to explain their understanding, let them take over.

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

## Quick Reference: Files & Workflow

### Context Files (Manage During Assessment)

**ASSESSMENT.md** (Root - CREATE ONCE, never modify)

- Copy-paste the actual problem statement from assessors
- Keep original requirements intact for reference
- **Do not modify** - this is your source of truth

**INTERVIEW_CHEATSHEET.md** (Root - UPDATE AS YOU GO)

- Your architectural decisions and WHY
- Security model explanation
- Scaling strategy
- What you'd add with more time
- **Update after each major decision** (don't wait until end)

**README.md** (Root - UPDATE during implementation)

- Domain-specific setup instructions
- How to run the solution
- Any assumptions or design notes

**CLAUDE.md** (Root - OPTIONAL updates)

- This file - update if you discover patterns Claude should follow
- Add problem-specific reminders if needed

### Code Files (Template patterns to copy)

- **Data types**: `app/lib/types.ts`
- **Validation schemas**: `app/lib/validation.ts`
- **Data store**: `app/lib/db.ts`
- **API routes**: Copy pattern from `app/api/users/`
- **Components**: `app/components/`
- **Error classes**: `app/lib/errors.ts` (already configured)

---

## Example: Adapting for "Appointment Booking System"

### Data Model

```typescript
// app/lib/types.ts
interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string; // UK number
}

interface Appointment {
  id: string;
  userId: string; // Reference to User (normalization)
  bookingReference: string; // 8-char human-readable
  serviceType: "passport" | "driving_license" | "tax";
  date: string; // "2025-12-09" (separate from time for easier querying)
  startTime: string; // "09:00" (30min duration implied)
  status: "confirmed" | "cancelled";
  createdAt: Date;
}
```

### Validation

```typescript
// app/lib/validation.ts
export const createAppointmentSchema = z.object({
  citizenEmail: z.string().email(),
  serviceType: z.enum(["passport", "driving-license", "tax"]),
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
6. **Document AS YOU GO** - Update INTERVIEW_CHEATSHEET.md after each major decision (don't wait until the end)

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
