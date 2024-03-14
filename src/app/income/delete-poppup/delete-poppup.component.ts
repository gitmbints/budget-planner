import { Component, Input } from '@angular/core';
import { IncomeService } from '../income.service';

@Component({
  selector: 'app-delete-poppup',
  templateUrl: './delete-poppup.component.html',
  styleUrls: ['./delete-poppup.component.scss'],
})
export class DeletePoppupComponent {
  @Input({ required: true }) incomeId!: number;

  constructor(private incomeService: IncomeService) {}

  deleteIncomeFromList() {
    this.incomeService.deleteIncome(this.incomeId);
  }
}
