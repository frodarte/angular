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

}
