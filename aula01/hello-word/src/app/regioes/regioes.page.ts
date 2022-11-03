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

  goToPage(cidades) {
    this.router.navigate(['/cidades'], {state:{data: cidades}});
  }

  goToPageMenu(URL){
    this.router.navigate(['/'+ URL])
  }

  private data: Regioes [] = [
    {
      id:1,
      title:'Norte',
    },
    {
      id:2,
      title:'Sul', 
     
    },
    {
      id:5,
      title:'Nordeste', 
     
    },
    {
      id:6,
      title:'Sudeste', 
     
    },
    {
      id:7,
      title:'Centroeste', 
      
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
    
  }
