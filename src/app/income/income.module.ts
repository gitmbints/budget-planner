import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeRoutingModule } from './income.routing.module';
import { IncomeService } from './income.service';
import { IncomeFormComponent } from './income-form/income-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletePoppupComponent } from './delete-poppup/delete-poppup.component';

@NgModule({
  declarations: [
    IncomeListComponent,
    IncomeFormComponent,
    DeletePoppupComponent,
  ],
  imports: [CommonModule, IncomeRoutingModule, ReactiveFormsModule],
  providers: [IncomeService],
})
export class IncomeModule {}
