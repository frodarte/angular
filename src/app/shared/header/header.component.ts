import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string="Titulo 1";

  public style: any ={
    color : 'blue', 'font-size' : '36px'
  }

  public categoria : string='A';
  

  constructor() { }

  ngOnInit() {
  }

}
