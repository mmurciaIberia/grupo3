import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponentComponent } from './controllers/list-component.component';

const routes: Routes = [{path: '', component: ListComponentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListModuleRoutingModule { }
