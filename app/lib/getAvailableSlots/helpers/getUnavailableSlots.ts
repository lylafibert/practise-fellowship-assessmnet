import { SLOT_CAPACITY } from "../constants";
import { getAppointmentsByDate } from "../db";
import { Appointment, AppointmentStatus } from "../types";

export const getUnavailableSlots = (date: string): string[] => {
  const appointments = getAppointmentsByDate(date);
  const unavailableSlots: string[] = [];

  const confirmedAppointments = appointments.filter(
    (appointment) => appointment.status === AppointmentStatus.Confirmed
  );
  const groupedAppointments = confirmedAppointments.reduce(
    (acc, appointment) => {
      if (!acc[appointment.startTime]) {
        acc[appointment.startTime] = [];
      }
      acc[appointment.startTime].push(appointment);
      return acc;
    },
    {} as Record<string, Appointment[]>
  );

  for (const [time, apps] of Object.entries(groupedAppointments)) {
    if (apps.length >= SLOT_CAPACITY) {
      unavailableSlots.push(time);
    }
  }

  return unavailableSlots;
};
