# CityHouse PMS Demo V2

Demo Next.js tập trung đúng scope:

## Admin
- Hotel Management
- Room Types
- Physical Rooms
- Availability
- Rates & Inventory
- Rate Plans
- Channel Pricing

## Staff
- Today
- Reservation Calendar / Tape Chart
- Drag & drop booking between rooms / room types
- Availability
- Room Status

## Run
```bash
npm install
npm run dev
```

Open:
- http://localhost:3000
- http://localhost:3000/admin
- http://localhost:3000/staff

## Notes
- Demo uses mock data only.
- Drag & drop currently updates local React state only.
- Rates and availability edits are local state only.
- Next phase can connect to Laravel/MySQL API and Channex.
