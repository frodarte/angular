import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../../../modelos/articulo'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input () description: string;
  @Input () price: number;
  
  constructor() { }

  ngOnInit() {
  }

}
