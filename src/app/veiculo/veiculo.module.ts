import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { VeiculoEditComponent } from "./veiculo-edit/veiculo-edit.component";
import { VeiculoListComponent } from "./veiculo-list/veiculo-list.component";
import { VeiculoViewComponent } from "./veiculo-view/veiculo-view.component";
import { ReactiveFormsModule } from "@angular/forms";
import { VeiculoRoutingModule } from "./veiculo-routing.module";
import { VeiculoComponent } from './veiculo.component';
import { YesNoPipe } from "../shared/pipes/yes-no.pipe";
import { MaterialModule } from "../material/material.module";
import { MensagemComponent } from "../shared/components/mensagem/mensagem.component";

@NgModule({
  declarations: [
    VeiculoEditComponent,
    VeiculoListComponent,
    VeiculoViewComponent,
    VeiculoComponent,
    YesNoPipe,
    MensagemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VeiculoRoutingModule,
    MaterialModule,
  ],
  exports: [VeiculoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VeiculoModule {

}
