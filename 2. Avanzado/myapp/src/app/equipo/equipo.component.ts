import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import {EquipoService} from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipo:any[] = []
  constructor(    private ruta:ActivatedRoute, private _service:EquipoService) { 
    this.ruta.params.subscribe(params=>{
      this.equipo = this._service.obtenerUno(params['id']);
      console.log(params)
    })
  }

  ngOnInit() {
  }

}
