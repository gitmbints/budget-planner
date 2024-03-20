import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Income } from '../income';
import { IncomeService } from '../income.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss'],
})
export class IncomeListComponent implements OnInit {
  incomeList: Income[] = [];
  /*  totalIncome: number = 0;
  incomeId!: number; */

  constructor(private incomeService: IncomeService) {}

  ngOnInit(): void {
    this.getIncomeList();
  }

  private getIncomeList(): void {
    this.incomeService.getIncomeList().subscribe((incomeList) => {
      this.incomeList = incomeList;
    });
  }

  /* private getTotalIncome() {
    this.incomeService.getTotalIncome().subscribe((totalIncome) => {
      this.totalIncome = totalIncome;
    });
  } */

  /* getIncomeId(incomeId: number) {
    console.log(this.incomeId);
    this.incomeId = incomeId;
  } */
}
