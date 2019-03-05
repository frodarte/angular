import { Component } from '@angular/core';
import { Articulo, Abarrote, Electronico, Samsung, Auto, Ford, Chevrolet } from 'src/modelos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor () {

    let articulo: Articulo;
    let category= 'electronico';

    if(category == 'abarrotes') {
      articulo= new Abarrote();
      console.log(articulo.imprimir());
    }
    if(category == 'electronico') {
      articulo= new Electronico();
      console.log(articulo.imprimir());
    }

    let samsung :Samsung=new Samsung();
    console.log(samsung.getCategoria());

    let ford: Auto=new Ford();
    console.log(ford.motor);

  } // constructor FIN
}


