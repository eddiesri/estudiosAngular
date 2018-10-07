import {RouterModule, Routes} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
//Servicioa
import { EquipoService } from './equipo.service';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes =[


  { path: 'nosotros' , component: NosotrosComponent },
  { path: 'contacto' , component: ContactoComponent },
  { path: 'equipo/:id/:nombre' , component: EquipoComponent },
  // Si quiero multiples parametros
  // {path:'/editModeloAviso/:id/:action', component: EditModeloAvisoComponent  }   


  { path: 'inicio' , component: InicioComponent, pathMatch:'full'},
  { path: '**' ,redirectTo: "inicio" , pathMatch : "full"},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    EncabezadoComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
