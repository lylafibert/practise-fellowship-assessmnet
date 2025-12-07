# Assessment Problem Statement

## Assessment 1: Citizen Appointment Booking System

---

**FROM**: No10 Innovation Fellowship Team <fellowship@no10.gov.uk>
**TO**: Candidate
**SUBJECT**: Technical Assessment - Appointment Booking System
**TIME ALLOWED**: 2 hours

---

### Background

Government departments currently operate separate appointment booking systems for citizen services (passport interviews, visa appointments, benefit assessments). This leads to poor user experience and duplicated technical effort.

We need you to build a proof-of-concept appointment booking system that could serve as a template for multiple departments.

### Your Task

Build a web application that allows citizens to book appointments for government services.

**The system must allow citizens to:**

- View available appointment slots for a given date
- Book an appointment by providing their name, email, and phone number
- Receive a unique booking reference number
- Cancel their appointment using their booking reference

**The system must allow staff to:**

- View all appointments scheduled for a specific date

**Technical Constraints:**

- Appointments are 30 minutes long
- Services operate Monday-Friday, 9am-5pm only
- Each time slot can accommodate up to 4 concurrent appointments
- You must prevent double-booking beyond this capacity
- The system should handle the "Passport Interview" service initially

**Non-Functional Requirements:**

- The interface must be accessible to users with disabilities
- User data must be validated and handled securely
- The system should provide clear error messages to users
- Include automated tests for critical functionality

### What We're Looking For

- Clean, well-structured code with clear separation of concerns
- Evidence of security and accessibility considerations
- Appropriate use of validation and error handling
- Tests that cover key user journeys
- Clear documentation of architectural decisions

### Submission

Please be prepared to:

- Walk us through your architectural decisions and trade-offs
- Explain how your solution would scale to support multiple service types
- Discuss what you would add given more time
- Extend the functionality during a paired programming session

### Notes

- You may use any technology stack you're comfortable with
- You may use in-memory storage or a database
- Focus on demonstrating your engineering thinking rather than pixel-perfect UI
- Document any assumptions you make
- Use TODO comments to indicate what you would add in a production system

---

## Assumptions & Clarifications

### Ambiguities Identified:

1. **Booking Window**: Problem doesn't specify how far ahead citizens can book

   - **Assumption**: Citizens can book up to 2 weeks (14 days) in advance
   - **Rationale**: Balances user flexibility with operational planning for government services

2. [Add more as you identify them]
