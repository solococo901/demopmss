export type RoomStatus = "Available" | "Occupied" | "Cleaning" | "Maintenance" | "Blocked";
export type BookingStatus = "Confirmed" | "Checked-in" | "Pending" | "Checked-out";

export const hotel = {
  id: "abora",
  name: "CityHouse - Abora",
  code: "ABORA",
  address: "TP. Hồ Chí Minh",
  currency: "VND",
  timezone: "Asia/Ho_Chi_Minh",
};

export const roomTypes = [
  { id: "courtyard-ground", name: "Courtyard Ground", code: "CG", totalRooms: 3, basePrice: 1150000, minPrice: 900000, maxPrice: 1700000, adults: 2 },
  { id: "courtyard-view", name: "Courtyard View", code: "CV", totalRooms: 8, basePrice: 1250000, minPrice: 1000000, maxPrice: 1900000, adults: 2 },
  { id: "courtyard-overlook", name: "Courtyard Overlook", code: "CO", totalRooms: 5, basePrice: 1300000, minPrice: 1050000, maxPrice: 2100000, adults: 2 },
];

export const rooms = [
  { id: "G03", roomTypeId: "courtyard-ground", status: "Available" as RoomStatus },
  { id: "G04", roomTypeId: "courtyard-ground", status: "Occupied" as RoomStatus },
  { id: "G05", roomTypeId: "courtyard-ground", status: "Available" as RoomStatus },
  { id: "102", roomTypeId: "courtyard-view", status: "Occupied" as RoomStatus },
  { id: "103", roomTypeId: "courtyard-view", status: "Available" as RoomStatus },
  { id: "104", roomTypeId: "courtyard-view", status: "Cleaning" as RoomStatus },
  { id: "202", roomTypeId: "courtyard-view", status: "Available" as RoomStatus },
  { id: "203", roomTypeId: "courtyard-view", status: "Occupied" as RoomStatus },
  { id: "204", roomTypeId: "courtyard-view", status: "Maintenance" as RoomStatus },
  { id: "302", roomTypeId: "courtyard-view", status: "Available" as RoomStatus },
  { id: "303", roomTypeId: "courtyard-view", status: "Blocked" as RoomStatus },
  { id: "304", roomTypeId: "courtyard-view", status: "Available" as RoomStatus },
  { id: "402", roomTypeId: "courtyard-overlook", status: "Occupied" as RoomStatus },
  { id: "403", roomTypeId: "courtyard-overlook", status: "Available" as RoomStatus },
  { id: "404", roomTypeId: "courtyard-overlook", status: "Available" as RoomStatus },
  { id: "502", roomTypeId: "courtyard-overlook", status: "Cleaning" as RoomStatus },
  { id: "503", roomTypeId: "courtyard-overlook", status: "Available" as RoomStatus },
];

export const dates = [
  { key: "2026-09-28", label: "Mon 28", short: "28/09" },
  { key: "2026-09-29", label: "Tue 29", short: "29/09" },
  { key: "2026-09-30", label: "Wed 30", short: "30/09" },
  { key: "2026-10-01", label: "Thu 01", short: "01/10" },
  { key: "2026-10-02", label: "Fri 02", short: "02/10" },
  { key: "2026-10-03", label: "Sat 03", short: "03/10" },
  { key: "2026-10-04", label: "Sun 04", short: "04/10" },
];

export const inventorySeed: Record<string, number[]> = {
  "courtyard-ground": [1, 1, 2, 1, 1, 2, 2],
  "courtyard-view": [3, 2, 4, 4, 3, 5, 5],
  "courtyard-overlook": [2, 3, 2, 3, 4, 4, 3],
};

export const ratePlans = [
  { id: "bar", name: "Best Available Rate", code: "BAR", type: "Base", parent: "-", adjustment: 0, minStay: 1 },
  { id: "nrf", name: "Non-refundable", code: "NRF", type: "Derived", parent: "BAR", adjustment: -10, minStay: 1 },
  { id: "weekly", name: "Weekly Stay", code: "WEEKLY", type: "Derived", parent: "BAR", adjustment: -15, minStay: 7 },
  { id: "monthly", name: "Monthly Stay", code: "MONTHLY", type: "Derived", parent: "BAR", adjustment: -25, minStay: 28 },
];

export const channels = [
  { id: "website", name: "Website Direct", code: "DIRECT", adjustment: -5 },
  { id: "booking", name: "Booking.com", code: "BOOKING_COM", adjustment: 10 },
  { id: "agoda", name: "Agoda", code: "AGODA", adjustment: 8 },
  { id: "expedia", name: "Expedia", code: "EXPEDIA", adjustment: 12 },
  { id: "trip", name: "Trip.com", code: "TRIP_COM", adjustment: 9 },
];

export type Booking = {
  id: string;
  guest: string;
  roomId: string;
  roomTypeId: string;
  start: number;
  nights: number;
  status: BookingStatus;
};

export const bookings: Booking[] = [
  { id: "BK001", guest: "Su Put", roomId: "G03", roomTypeId: "courtyard-ground", start: 1, nights: 3, status: "Checked-in" },
  { id: "BK002", guest: "Patrick Marcelo", roomId: "G04", roomTypeId: "courtyard-ground", start: 1, nights: 4, status: "Checked-in" },
  { id: "BK003", guest: "Chew Wangqing", roomId: "G05", roomTypeId: "courtyard-ground", start: 3, nights: 3, status: "Confirmed" },
  { id: "BK004", guest: "Christelle Faith", roomId: "102", roomTypeId: "courtyard-view", start: 1, nights: 2, status: "Checked-in" },
  { id: "BK005", guest: "Shichun Weng", roomId: "103", roomTypeId: "courtyard-view", start: 2, nights: 3, status: "Confirmed" },
  { id: "BK006", guest: "Mintra Wongwirat", roomId: "104", roomTypeId: "courtyard-view", start: 2, nights: 4, status: "Confirmed" },
  { id: "BK007", guest: "Chananphon", roomId: "202", roomTypeId: "courtyard-view", start: 0, nights: 3, status: "Checked-in" },
  { id: "BK008", guest: "Thaw Okkar", roomId: "203", roomTypeId: "courtyard-view", start: 1, nights: 3, status: "Checked-in" },
  { id: "BK009", guest: "Aekkarin Thippawat", roomId: "204", roomTypeId: "courtyard-view", start: 3, nights: 3, status: "Confirmed" },
  { id: "BK010", guest: "Ying Liang", roomId: "302", roomTypeId: "courtyard-view", start: 2, nights: 2, status: "Confirmed" },
  { id: "BK011", guest: "Hai Qi Leow", roomId: "303", roomTypeId: "courtyard-view", start: 1, nights: 3, status: "Checked-in" },
  { id: "BK012", guest: "Kenneth Lee", roomId: "304", roomTypeId: "courtyard-view", start: 4, nights: 2, status: "Confirmed" },
  { id: "BK013", guest: "Sin Bun Soo", roomId: "402", roomTypeId: "courtyard-overlook", start: 1, nights: 3, status: "Confirmed" },
  { id: "BK014", guest: "Panissara Kulsiri", roomId: "403", roomTypeId: "courtyard-overlook", start: 0, nights: 2, status: "Checked-out" },
  { id: "BK015", guest: "Maria Pastor", roomId: "404", roomTypeId: "courtyard-overlook", start: 2, nights: 3, status: "Confirmed" },
  { id: "BK016", guest: "Fangchieh Liu", roomId: "502", roomTypeId: "courtyard-overlook", start: 2, nights: 3, status: "Confirmed" }
];

export const rates: Record<string, number[]> = {
  "courtyard-ground": [1150000,1150000,1250000,1250000,1350000,1450000,1450000],
  "courtyard-view": [1250000,1250000,1350000,1350000,1450000,1550000,1550000],
  "courtyard-overlook": [1300000,1300000,1400000,1400000,1500000,1600000,1600000],
};
