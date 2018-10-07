import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //----------------------Clase de ngIf------------------------
  /* show:boolean= false; */
  //----------------------Clase de ngFor------------------------
  // cursos:string[] = ["html" , "css" , "js"]
  animales:Array<any> = [
    {tipo:'perro' , nombre:'lisa', edad:'10'},
    {tipo:'gato' , nombre:'marge', edad:'12'},
    {tipo:'conejo' , nombre:'maggie', edad:'8'}
  ]
}
