import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeRoutingModule } from './income.routing.module';
import { IncomeService } from './income.service';
import { IncomeFormComponent } from './income-form/income-form.component';

@NgModule({
  declarations: [IncomeListComponent, IncomeFormComponent],
  imports: [CommonModule, IncomeRoutingModule],
  providers: [IncomeService],
})
export class IncomeModule {}
