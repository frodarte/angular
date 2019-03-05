import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public description: string="Esta es la descripción";
  public price: string="34.343";

  constructor() { }

  ngOnInit() {
  }

}
