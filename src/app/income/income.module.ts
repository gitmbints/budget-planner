import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeRoutingModule } from './income.routing.module';
import { IncomeAddComponent } from './income-add/income-add.component';

@NgModule({
  declarations: [IncomeListComponent, IncomeAddComponent],
  imports: [CommonModule, IncomeRoutingModule],
})
export class IncomeModule {}
