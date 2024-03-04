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

  constructor(private incomeService: IncomeService) {}

  ngOnInit(): void {
    this.getIncomeList();
  }

  private getIncomeList() {
    console.table(this.income);
    this.income = this.incomeService.getIncome();
  }
}
