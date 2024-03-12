import { Injectable } from '@angular/core';
import { Income } from './income';
import { MOCK_INCOMES } from './mock-income-list';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  private incomeList: Income[] = MOCK_INCOMES;

  constructor() {}

  getIncome(): Income[] {
    return this.incomeList;
  }

  addIncome(newIncome: Income) {
    this.incomeList.push(newIncome);
  }

  deleteIncome(incomeId: number) {
    const index = this.incomeList.findIndex((item) => item.id === incomeId);

    if (index !== -1) {
      this.incomeList.splice(index, 1);
    }
  }
}
