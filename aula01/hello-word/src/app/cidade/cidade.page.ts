import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.page.html',
  styleUrls: ['./cidade.page.scss'],
})
export class CidadePage implements OnInit {
  cidade: object;

  constructor(private router: Router) {
    
    this.cidade =[];
  }

  ngOnInit() {
    this.cidade = history.state.data;
    console.log(this.cidade);
  }

  goToPage() {
    this.router.navigate(["/cidades"]);
  }

  goToPageMenu(URL){
    this.router.navigate(['/'+ URL])
  }
}