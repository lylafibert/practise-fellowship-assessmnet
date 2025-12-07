import { getUnavailableSlots } from "./helpers/getUnavailableSlots";
import { listAllSlots } from "./helpers/listAllSlots";

export const getAvailableSlots = (date: string): string[] => {
  const allSlots = listAllSlots();
  const unavailableSlots = getUnavailableSlots(date);
  const availableSlots = allSlots.filter(
    (slot) => !unavailableSlots.includes(slot)
  );
  return availableSlots;
};
