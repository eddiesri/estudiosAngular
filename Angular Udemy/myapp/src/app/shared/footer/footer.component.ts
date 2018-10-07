import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   anio: Number = new Date().getFullYear();
   data: any = {};
   constructor( public _service: InfoPaginaService) {
     this.data = _service;
   }
  ngOnInit() {
  }

}
