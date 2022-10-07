import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tela = innerWidth;
  toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize',['$event'])
  onResize() {
    this.tela = window.innerWidth;
  }

  funcaoToggle() {
    this.toggle=!this.toggle
  }

}
