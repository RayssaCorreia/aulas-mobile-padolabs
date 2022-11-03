import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {CidadesService} from "../cidades.service"

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],
})
export class CidadesPage{
  cidades: object;
  regiao: string;
  
  constructor(
    private router: Router,
    private CidadesService: CidadesService,
  ){
    this.cidades = [];
    this.regiao = "";
  }

  goToPage(cidade) {
    console.log(cidade);
    this.router.navigate(["/cidade"], {state: {data: cidade}});
  }
  
  goToPageMenu(URL){
    this.router.navigate(['/'+ URL])
  }

  ngOnInit() {
    this.regiao = history.state.data;

    console.log(history.state);

    this.CidadesService.obterCidadesByRegion(this.regiao).subscribe(data => {
      this.cidades = data;
      console.log(data);
    });
  }



}

