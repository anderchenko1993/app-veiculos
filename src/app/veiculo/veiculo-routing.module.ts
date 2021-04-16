import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VeiculoEditComponent } from "./veiculo-edit/veiculo-edit.component";
import { VeiculoListComponent } from "./veiculo-list/veiculo-list.component";
import { VeiculoViewComponent } from "./veiculo-view/veiculo-view.component";
import { VeiculoComponent } from "./veiculo.component";

const routes: Routes = [
  {
    path: '',
    component: VeiculoComponent,
    children: [
      { path: '', component: VeiculoListComponent },
      { path: 'add', component: VeiculoEditComponent },
      { path: 'edit/:id', component: VeiculoEditComponent },
      { path: 'view/:id', component: VeiculoViewComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoRoutingModule {

}
