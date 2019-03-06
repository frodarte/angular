import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input ('titulo') title: string;

  public style: any ={
    color : 'blue', 'font-size' : '36px'
  }

  @Input() categoria : string;
  

  constructor() { }

  ngOnInit() {
  }

}
