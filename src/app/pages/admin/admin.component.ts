import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../../modelos/articulo';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticulosService]
})
export class AdminComponent implements OnInit {

public articulos:Articulo[];

  ngOnInit() {
    this.articulos= this.as.articulos;
    
  }

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private as: ArticulosService) {
    
  }
 
  nuevo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public agregar (){
    this.as.nuevo({

      nombre: 'Television22',
        marca: 'LG',
        precio: 4200,
        title: 'Television22',
        description: '32 pulgadas',
        promotion: true,
        url: 'assets/img/samsung.jpg',
        id: 2,
        categoria: 'A',
        fecha: new Date()
    });
    this.articulos=this.as.articulos;
    this.modalRef.hide();
  }

  public borrar(articulo: Articulo ) {

    for(let i=0; i<this.articulos.length; i++) {
      if (articulo.id == this.articulos[i].id) {
        this.articulos.splice(i, 1);
      }
    }
  }
}
