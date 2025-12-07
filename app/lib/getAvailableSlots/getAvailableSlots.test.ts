import { getAvailableSlots } from "./getAvailableSlots";
import { getUnavailableSlots } from "./helpers/getUnavailableSlots";
import { listAllSlots } from "./helpers/listAllSlots";

vi.mock("./getUnavailableSlots");
vi.mock("./listAllSlots");

const mockGetUnavailableSlots = vi.mocked(getUnavailableSlots);
const mockListAllSlots = vi.mocked(listAllSlots);

describe("getAvailableSlots", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns all slots when there are no unavailable slots", () => {
    const allSlots = ["09:00", "09:30", "10:00"];
    mockListAllSlots.mockReturnValueOnce(allSlots);
    mockGetUnavailableSlots.mockReturnValueOnce([]);

    const date = "01/01/2023";

    const result = getAvailableSlots(date);

    expect(mockListAllSlots).toHaveBeenCalledTimes(1);
    expect(mockGetUnavailableSlots).toHaveBeenCalledWith(date);
    expect(result).toEqual(allSlots);
  });
  it("returns only available slots when there are some unavailable slots", () => {
    const allSlots = ["09:00", "09:30", "10:00", "10:30"];
    const unavailableSlots = ["09:30", "10:00"];
    mockListAllSlots.mockReturnValueOnce(allSlots);
    mockGetUnavailableSlots.mockReturnValueOnce(unavailableSlots);

    const date = "01/01/2023";

    const result = getAvailableSlots(date);

    expect(mockListAllSlots).toHaveBeenCalledTimes(1);
    expect(mockGetUnavailableSlots).toHaveBeenCalledWith(date);
    expect(result).toEqual(["09:00", "10:30"]);
  });
});
