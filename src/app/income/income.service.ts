import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Income } from './income';
import { MOCK_INCOMES } from './mock-income-list';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  private incomeList: Income[] = MOCK_INCOMES;
  private incomeListSubject: BehaviorSubject<Income[]> = new BehaviorSubject<
    Income[]
  >(this.incomeList);

  constructor() {}

  getIncome(): Observable<Income[]> {
    return this.incomeListSubject.asObservable();
  }

  addIncome(newIncome: Income) {
    this.incomeList.push(newIncome);
    this.incomeListSubject.next(this.incomeList);
  }

  deleteIncome(incomeId: number) {
    const index = this.incomeList.findIndex((item) => item.id === incomeId);

    if (index !== -1) {
      this.incomeList.splice(index, 1);
      this.incomeListSubject.next(this.incomeList);
    }
  }

  getTotalIncome(): Observable<number> {
    return this.incomeListSubject.pipe(
      map((incomeList) =>
        incomeList.reduce((total, income) => total + income.amount, 0)
      )
    );
  }
}
