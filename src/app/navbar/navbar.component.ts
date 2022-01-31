import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})



export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*=============== SHOW MENU ===============*/
    const navMenu: any = document.getElementById('nav-menu'),
      navToggle: any = document.getElementById('nav-toggle'),
      navClose: any = document.getElementById('nav-close');

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    const navLink: any = document.querySelectorAll('.nav__link');

    function linkAction() {
      const navMenu: any = document.getElementById('nav-menu');
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show-menu');
    }
    navLink.forEach((n: any) => n.addEventListener('click', linkAction));

    /*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader() {
      const header: any = document.getElementById('header');
      //Cuando se haga scroll que sea mayor a 50 viewport height, se añade la clase scroll-header a la
      //etiqueta header
      if (scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);
  }
}
