//! FAZER AS FUNÇÕES PARA ESSA PAGINA
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CidadesService} from '../cidades.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router){}
    //           private cidadesService: CidadesService,
    // ){
    //   this.Cidades =[];
    // }

// ngOnInit() {
//   this.CidadesService.BuscarCidades().subscribe(data => {
//     console.log(data);
//     this.Cidades =data;
//   });
// }

  // goToPage(Cidades) {
  //   console.log(Cidades);
  //   this.router.navigate(['/cidades'], {sate {data: Cidades}});
  // }

  goToPage() {
      console.log();
      this.router.navigate(['/cidades']);
    }
}