import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {
  item:any = {
      name :''
  }
  constructor(private _service:ConexionService) {


   }
   agregar(){
     this._service.addItem(this.item);
   }
  ngOnInit() {
  }

}
