import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeAddComponent } from './income-add/income-add.component';
import { IncomeListComponent } from './income-list/income-list.component';

const routes: Routes = [
  {
    path: 'list',
    data: { title: 'Liste des revenus' },
    component: IncomeListComponent,
  },
  {
    path: 'add',
    data: { title: 'Ajout de revenu' },
    component: IncomeAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeRoutingModule {}
