//! FAZER AS FUNÇÕES PARA ESSA PAGINA
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToPage() {
    this.router.navigate(['/cidades']);
  }
}
