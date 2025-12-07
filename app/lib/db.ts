import { User, Appointment } from "./types";

const users = new Map<string, User>();
const appointments = new Map<string, Appointment>();

export const createUser = (user: User) => {
  users.set(user.id, user);
  return user;
};

export const createAppointment = (appointment: Appointment) => {
  appointments.set(appointment.id, appointment);
  return appointment;
};

export const getAppointmentsByDate = (date: string): Appointment[] => {
  return Array.from(appointments.values()).filter((app) => app.date === date);
};

export const deleteAppointment = (id: string): boolean => {
  return appointments.delete(id);
};

export const getAppointmentByBookingRef = (
  bookingReference: string
): Appointment | undefined => {
  return Array.from(appointments.values()).find(
    (app) => app.bookingReference === bookingReference
  );
};
