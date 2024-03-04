import { Income } from './income';

export const MOCK_INCOMES: Income[] = [
  {
    id: 1,
    description: 'Salary',
    amount: 1000,
    date: new Date('2024-02-03'),
  },
  {
    id: 2,
    description: 'Freelance Income',
    amount: 500,
    date: new Date('2024-02-05'),
  },
  {
    id: 3,
    description: 'Saas',
    amount: 300,
    date: new Date('2024-03-05'),
  },
  // Ajoutez d'autres exemples d'incomes au besoin
];
