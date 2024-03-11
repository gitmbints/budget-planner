import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Income } from '../income';
import { IncomeService } from '../income.service';

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.scss'],
})
export class IncomeFormComponent {
  incomeForm = this.fb.group({
    description: ['', Validators.required],
    amount: ['', Validators.required],
    date: [new Date()],
  });

  constructor(private fb: FormBuilder, private incomeService: IncomeService) {}

  onSubmit() {
    const formValues = this.incomeForm.value;

    const newIncome: Income = {
      id: Math.random() * 10_000_000,
      description: formValues.description!,
      amount: +formValues.amount!,
      date: formValues.date!,
    };

    this.incomeService.addIncome(newIncome);

    this.incomeForm.reset();
  }
}
