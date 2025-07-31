export interface PantryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiryDate: string;
  addedDate: string;
}

export const categories = [
  "All",
  "Dairy",
  "Meat",
  "Vegetables",
  "Fruits",
  "Grains",
  "Snacks",
  "Beverages",
  "Condiments",
];

export const mockPantryItems: PantryItem[] = [
  {
    id: "1",
    name: "Milk",
    category: "Dairy",
    quantity: 2,
    unit: "liters",
    expiryDate: "2024-08-02",
    addedDate: "2024-07-28",
  },
  {
    id: "2",
    name: "Chicken Breast",
    category: "Meat",
    quantity: 1,
    unit: "kg",
    expiryDate: "2024-08-01",
    addedDate: "2024-07-29",
  },
  {
    id: "3",
    name: "Bananas",
    category: "Fruits",
    quantity: 6,
    unit: "pieces",
    expiryDate: "2024-08-05",
    addedDate: "2024-07-30",
  },
  {
    id: "4",
    name: "Bread",
    category: "Grains",
    quantity: 1,
    unit: "loaf",
    expiryDate: "2024-08-03",
    addedDate: "2024-07-30",
  },
  {
    id: "5",
    name: "Yogurt",
    category: "Dairy",
    quantity: 4,
    unit: "cups",
    expiryDate: "2024-08-07",
    addedDate: "2024-07-28",
  },
  {
    id: "6",
    name: "Carrots",
    category: "Vegetables",
    quantity: 500,
    unit: "grams",
    expiryDate: "2024-08-10",
    addedDate: "2024-07-29",
  },
  {
    id: "7",
    name: "Rice",
    category: "Grains",
    quantity: 2,
    unit: "kg",
    expiryDate: "2025-07-30",
    addedDate: "2024-07-25",
  },
  {
    id: "8",
    name: "Apples",
    category: "Fruits",
    quantity: 8,
    unit: "pieces",
    expiryDate: "2024-08-12",
    addedDate: "2024-07-29",
  },
];

export const getExpiringItems = (days: number = 3): PantryItem[] => {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + days);

  return mockPantryItems.filter((item) => {
    const expiryDate = new Date(item.expiryDate);
    return expiryDate <= futureDate && expiryDate >= today;
  });
};

export const getDaysUntilExpiry = (expiryDate: string): number => {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const diffTime = expiry.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};