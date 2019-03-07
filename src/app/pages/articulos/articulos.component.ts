import { Component, OnInit } from '@angular/core';
import { articulosDB } from '../../datos/articulodb';
import { Articulo } from '../../../modelos/articulo';

@Component({
  selector: 'articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  public lista: Articulo[] = articulosDB;
  constructor() { }

  ngOnInit() {
  }

  public quitar(id: number){
    for (let i=0; i< this.lista.length; i++) {
      if(this.lista[i].id==id) {
        this.lista.splice(i, 1);
      }
    }
  }

  public seleccionar(id: number) {
    for (let i=0; i< this.lista.length; i++) {
      if(this.lista[i].id==id) {
        console.log("poniendo borde...");


      }
    }
  }
}
