export enum AppointmentStatus {
  Confirmed = "confirmed",
  Cancelled = "cancelled",
}

export enum ServiceType {
  Passport = "passport",
  DrivingLicense = "driving_license",
  Tax = "tax",
}

export type Appointment = {
  id: string; // internal UUID
  userId: string; // internal user UUID
  bookingReference: string; // 8 char human readable,
  date: string; // in DD/MM/YYYY format
  startTime: string; // in HH:MM format
  serviceType: ServiceType;
  status: AppointmentStatus;
  createdAt: Date;
};

export type User = {
  id: string; // internal UUID
  name: string;
  email: string;
  phoneNumber: string; // Assumed uk number
};
