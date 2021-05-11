import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.getElementById('navigation') as HTMLElement;

    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');

    } else {
      element.classList.remove('navbar-inverse');
    }
  }


  
}
