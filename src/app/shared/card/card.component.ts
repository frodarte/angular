import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Articulo } from '../../../modelos/articulo'
import { setHostBindings } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public colorBorde: boolean;
  @Input () articulo: Articulo;
  @Output () onQuitar: EventEmitter<number>= new EventEmitter<number>();
  @Output () onSeleccionar: EventEmitter<number>= new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public accionEliminar(event: boolean) {
    console.log("evento eliminar de footer");
    this.onQuitar.emit(this.articulo.id);
  }

  public accionSeleccionar(event: boolean) {
    console.log("evento seleccionar de footer");
    this.onSeleccionar.emit(this.articulo.id);
    this.colorBorde=!this.colorBorde;
  }

  public ngOnDestroy (){
    console.log("He eliminado tarjeta");

  }
}
