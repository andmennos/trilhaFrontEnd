import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  tela = innerWidth;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize',['$event'])
  onResize() {
    this.tela = window.innerWidth;
  }

}
