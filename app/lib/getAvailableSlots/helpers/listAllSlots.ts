import {
  SLOT_DURATION_MINUTES,
  WORKING_HOURS_END,
  WORKING_HOURS_START,
} from "../constants";

export const listAllSlots = (): string[] => {
  const slots: string[] = [];

  // Create a base date (any date works, we only care about time)
  const currentSlot = new Date();
  currentSlot.setHours(WORKING_HOURS_START, 0, 0, 0);

  // Generate slots until we reach end of working hours
  while (currentSlot.getHours() < WORKING_HOURS_END) {
    const hours = currentSlot.getHours().toString().padStart(2, "0");
    const minutes = currentSlot.getMinutes().toString().padStart(2, "0");
    slots.push(`${hours}:${minutes}`);

    // Add 30 minutes for next slot
    currentSlot.setMinutes(currentSlot.getMinutes() + SLOT_DURATION_MINUTES);
  }

  return slots;
};
