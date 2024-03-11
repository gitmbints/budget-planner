import { Injectable } from '@angular/core';
import { Income } from './income';
import { MOCK_INCOMES } from './mock-income-list';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  private income: Income[] = MOCK_INCOMES;

  constructor() {}

  getIncome(): Income[] {
    return this.income;
  }

  addIncome(newIncome: Income): void {
    this.income.push(newIncome);
  }
}
