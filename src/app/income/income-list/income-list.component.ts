import { Component, OnInit } from '@angular/core';
import { Income } from '../income';
import { IncomeService } from '../income.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss'],
})
export class IncomeListComponent implements OnInit {
  income: Income[] = [];
  totalIncome: number = 0;

  constructor(private incomeService: IncomeService) {}

  ngOnInit(): void {
    this.getIncomeList();
    this.getTotalIncome();
  }

  private getIncomeList() {
    this.incomeService.getIncome().subscribe((incomeList) => {
      this.income = incomeList;
    });
  }

  private getTotalIncome() {
    this.incomeService.getTotalIncome().subscribe((totalIncome) => {
      this.totalIncome = totalIncome;
    });
  }

  removeIncomeFromList(incomeId: number) {
    this.incomeService.deleteIncome(incomeId);
  }
}
