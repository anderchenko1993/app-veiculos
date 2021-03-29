import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoEditComponent } from './veiculo/veiculo-edit/veiculo-edit.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoViewComponent } from './veiculo/veiculo-view/veiculo-view.component';


const routes: Routes = [
  { path: 'veiculos/add', component: VeiculoEditComponent },
  { path: 'veiculos/:id/edit', component: VeiculoEditComponent },
  { path: 'veiculos/:id', component: VeiculoViewComponent },
  { path: '', component: VeiculoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
