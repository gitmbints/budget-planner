import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeRoutingModule } from './income.routing.module';



@NgModule({
  declarations: [
    IncomeListComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule
  ]
})
export class IncomeModule { }
