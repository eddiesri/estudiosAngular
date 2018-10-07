import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo:any[] = [
    {
      nombre: 'ignacio' ,
      especialidad: 'HTML',
      descripcion: 'lorem ipsum'
  },
  {
    nombre: 'maria' ,
    especialidad: 'CSS',
    descripcion: 'lorem ipsum'
}
  ]
  constructor() { 
  }
  obtenerEquipo(){
    return this.equipo 
  }

  obtenerUno(i){
    return this.equipo[i]
  }
}
