export type Customer = {
  id: string;
  avatar: string;
  name: string;
  registered: string;
  email: string;
  phone: string;
  bookings: string;
  lastService: string;
  totalSpent: string;
  lastVisit: string;
  status: {
    label: string;
    colorClass: string;
    bgClass: string;
  };
};