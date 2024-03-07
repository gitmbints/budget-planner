import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeListComponent } from './income-list/income-list.component';

const routes: Routes = [
  {
    path: 'list',
    data: { title: 'Liste des revenus' },
    component: IncomeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeRoutingModule {}
