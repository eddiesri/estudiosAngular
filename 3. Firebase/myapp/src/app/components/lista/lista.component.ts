import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items:any
  editarItem:any = {
    name:''
  }
  constructor(private conexion:ConexionService) { 
    this.conexion.listaItem().subscribe(item =>{
      this.items = item;
    });
  }

  eliminar(item){
    this.conexion.deleteItem(item);
  }
  editar(item){
    this.editarItem = item
    console.log(this.editarItem)

  }
  ngOnInit() {
  }
  agregarItemEditado(){

    this.conexion.editItem(this.editarItem);
  }

}
