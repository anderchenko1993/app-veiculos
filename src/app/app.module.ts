import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculoEditComponent } from './veiculo/veiculo-edit/veiculo-edit.component';
import { VeiculoViewComponent } from './veiculo/veiculo-view/veiculo-view.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoEditComponent,
    VeiculoViewComponent,
    VeiculoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
