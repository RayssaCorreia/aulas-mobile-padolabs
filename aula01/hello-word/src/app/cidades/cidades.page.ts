import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CidadesService} from "../cidades.service"

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],
})
export class CidadesPage implements OnInit {
  Cidades: object;

  constructor(
    private router: Router,
    private CidadesService: CidadesService,
  ){
    this.Cidades = [];
  }

  ngOnInit() {
    this.CidadesService.BuscarCidades().subscribe(data => {
      console.log(data);
      this.Cidades = data;
    });
  }

  goToPage(Cidade) {
    console.log(Cidade);
    this.router.navigate(["/cidade"], {state: {data: Cidade}});
  }

  // private data: cidades [] = [
  //   {
  //     id:1,
  //     destino: 'LONDRINA, PR',
  //     cidade:'cidade',
  //     regiao:'norte',
  //     description: 'Londrina é um município brasileiro localizado no estado do Paraná, na Região Sul do Brasil, distando 381 km da capital paranaense, Curitiba. É considerada pela CGU a cidade mais transparente do Paraná.',
  //   },
  //   {
  //     id:2, 
  //     destino: 'CURITIBA, PR',
  //     cidade:'curitiba',
  //     regiao:'Sul',
  //     description: 'Curitiba é a capital do estado do Paraná, na região sul do Brasil. A Torre Panorâmica, que tem um observatório em sua parte superior, destaca-se na silhueta da cidade.',
  //   },
  //   {
  //     id:3, 
  //     destino: 'MARINGÁ, PR',
  //     cidade:'maringa',
  //     regiao:'noroeste',
  //     description: 'Maringa é um município brasileiro do estado do Paraná, sendo uma cidade média-grande planejada e de urbanização recente.',
  //   },
  // ];  

  // //? geters & setters
  // protected getData(): cidades []{
  //   return this.data;
  // }

}

// //? INTERFACE
// interface cidades{
//   id: number;
//   destino: string;
//   cidade:string;
//   regiao: string;
//   description: string;
// }
