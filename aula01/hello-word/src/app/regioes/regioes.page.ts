import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regioes',
  templateUrl: './regioes.page.html',
  styleUrls: ['./regioes.page.scss'],
})
export class RegioesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(URL) {
    this.router.navigate(['/' + URL]);
  }

  private data: Regioes [] = [
    {
      id:1,
      title:'NORTE', 
      url: 'cidades',
    },
    {
      id:2,
      title:'SUL', 
      url: 'sul',
    },
    {
      id:3,
      title:'LESTE', 
      url: 'leste',
    },
    {
      id:4,
      title:'OESTE', 
      url: 'oeste',
    },
    {
      id:5,
      title:'NORDESTE', 
      url: 'nordeste',
    },
    {
      id:6,
      title:'SUDESTE', 
      url: 'sudeste',
    },
    {
      id:7,
      title:'SUDOESTE', 
      url: 'sudoeste',
    },
    {
      id:8,
      title:'NOROESTE', 
      url: 'nordeste',
    },
  ];

  //? geters & setters
  protected getData(): Regioes []{
    return this.data;
  }


}
  //? INTERFACE
  interface Regioes{
    id: number;
    title: string;
    url: string;
  }
