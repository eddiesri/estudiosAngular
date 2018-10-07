import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
equipo:any[] = [];
  constructor(private _service:EquipoService) {
      this.equipo = _service.obtenerEquipo();

   }

  ngOnInit() {
  }

}
