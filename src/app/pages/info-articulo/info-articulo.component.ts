import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../../modelos/articulo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-articulo',
  templateUrl: './info-articulo.component.html',
  styleUrls: ['./info-articulo.component.css'],
  providers: [ArticulosService]
})
export class InfoArticuloComponent implements OnInit {

  public articulo: Articulo;
  constructor(private articulosService: ArticulosService, private router: ActivatedRoute) { }

  
  ngOnInit() {
    let id: string=this.router.snapshot.paramMap.get('id');
    this.articulo = this.articulosService.get(Number(id));
  }

}
