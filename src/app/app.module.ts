import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeModule } from './income/income.module';
import { ExpenseModule } from './expense/expense.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlowbiteDatepickerDirective } from './flowbite-datepicker.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    FlowbiteDatepickerDirective,
  ],
  imports: [
    BrowserModule,
    IncomeModule,
    ExpenseModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
