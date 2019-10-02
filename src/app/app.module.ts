import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MesasComponent } from './componentes/mesas/mesas.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { FormularioProductoComponent } from './componentes/formulario-producto/formulario-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    MesasComponent,
    ProductosComponent,
    FormularioProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
