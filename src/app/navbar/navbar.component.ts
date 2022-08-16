import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

showMenu() {
  setTimeout(() => {
    document.getElementById('menu').classList.remove('d-none')
  }, 50);
  
}

closeMenu() {
  setTimeout(() => {
    document.getElementById('menu').classList.add('d-none');
  }, 50);}
}
