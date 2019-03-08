import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 /* public botones: any[]=[{
    name: 'boton 1'
  },{
    name: 'boton 2'
  },{
    name: 'boton 3'
  }];
*/
  public promotion:boolean=true;
  public color: boolean=false;
  public colorBorder: boolean=false;
  @Output() onEliminar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSeleccionar: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  public aplicarPromocion(){
    this.color=!this.color;
  }

   public eliminar() {
    this.onEliminar.emit(true);
     console.log("estoy en Eliminar");
   }

   public seleccionar() {
     console.log("estoy en Seleccionar")
     this.onSeleccionar.emit(true);
     this.colorBorder = !this.colorBorder;
   }

}
