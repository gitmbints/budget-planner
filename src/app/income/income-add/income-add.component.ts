import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-add',
  templateUrl: './income-add.component.html',
  styleUrls: ['./income-add.component.scss'],
})
export class IncomeAddComponent {
  constructor(private router: Router) {}

  goToIncomeList() {
    this.router.navigate(['/income/list']);
  }
}
