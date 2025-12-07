import { getAppointmentsByDate } from "../../db";
import { Appointment, AppointmentStatus } from "../../types";
import { getUnavailableSlots } from "./getUnavailableSlots";

vi.mock("../db");

const createMockAppointment = (
  startTime: string,
  status = AppointmentStatus.Confirmed
): Appointment =>
  ({
    date: "01/01/2023",
    startTime,
    status,
  } as Appointment);

const mockGetAppointmentsByDate = vi.mocked(getAppointmentsByDate);

describe("getUnavailableSlots", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("returns an empty array if there are no appointments for the given date", () => {
    mockGetAppointmentsByDate.mockReturnValueOnce([]);

    const result = getUnavailableSlots("01/01/2023");
    expect(mockGetAppointmentsByDate).toHaveBeenCalledWith("01/01/2023");
    expect(result).toEqual([]);
  });
  it("returns unavailable slots based on appointments", () => {
    const appointments = [
      createMockAppointment("09:00"),
      createMockAppointment("09:00"),
      createMockAppointment("09:00", AppointmentStatus.Cancelled),
      createMockAppointment("10:00"),
      createMockAppointment("11:00"),
      createMockAppointment("11:00"),
      createMockAppointment("13:00"),
      createMockAppointment("13:00"),
      createMockAppointment("13:00"),
      createMockAppointment("13:00"),
      createMockAppointment("14:00"),
      createMockAppointment("16:00"),
      createMockAppointment("16:00"),
      createMockAppointment("16:00"),
      createMockAppointment("16:00", AppointmentStatus.Cancelled),
      createMockAppointment("16:00"),
    ];
    mockGetAppointmentsByDate.mockReturnValueOnce(appointments);
    const result = getUnavailableSlots("01/01/2023");

    expect(result).toEqual(["13:00", "16:00"]);
  });
});
