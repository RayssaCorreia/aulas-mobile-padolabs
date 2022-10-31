import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.page.html',
  styleUrls: ['./cidade.page.scss'],
})
export class CidadePage implements OnInit {
  Cidade: object;

  constructor() {
    this.Cidade =[];
  }

  ngOnInit() {
    this.Cidade = history.state.data.cidade;
    console.log(history.state);
  }

  // goToPage(URL) {
  //   this.router.navigate(['/' + URL]);
  // }

  // private data: cidades [] = [
  //   {
  //     id:1,
  //     destino: 'LONDRINA, PR',
  //     regiao:'Norte',
  //     description: 'Londrina (pronúncia no IPA: [lõˈdɾinɐ]) é um município brasileiro localizado no estado do Paraná, na Região Sul do Brasil, distando 381 km da capital paranaense, Curitiba. É considerada pela CGU a cidade mais transparente do Paraná.[8] Sua população, conforme estimativas do IBGE de 2021, era de 580 870 habitantes,[4] sendo a segunda cidade mais populosa do estado e a quarta da Região Sul, depois da capital estadual, Curitiba, de Porto Alegre e Joinville. Importante polo de desenvolvimento estadual e regional, Londrina é um importante eixo que liga o Sul ao Sudeste do país, sendo um importante centro urbano, econômico, industrial, financeiro, administrativo e cultural do norte do Paraná.Fundada em 10 de dezembro de 1934 através do Decreto Estadual nº 2519[9] com traçado urbanístico planejado pelo urbanista Jorge Macedo Vieira, seguindo o princípio de Ebenezer Howard de cidade-jardim.[10] A cidade floresceu e experimentou um alto índice de crescimento populacional e econômico durante todo o século XX, amparado inicialmente pelo plantio e comercialização do café, tendo Londrina ganhado a alcunha de "Capital do Café" naquele período. A partir dos anos 1970, o perfil econômico londrinense foi se alterando progressivamente, tendo evoluído para um importante e diversificado centro industrial e econômico regional, até se tornar uma das principais cidades do interior do Brasil. Sede da Região Metropolitana de Londrina (RML), o segundo maior aglomerado urbano do estado, da qual é sede, que contava com uma população estimada em 1 057 660 habitantes em 2013.',
  //     populacao:'575.377 (1 de jul. de 2020)',
  //     area:'1.651 km²',
  //     prefeito:'Marcelo Belinati',
  //     autitude:'610 m',
  //   },
  // ];  

  // //? geters & setters
  // protected getData(): cidades []{
  //   return this.data;
  // }

}

//  //? INTERFACE
//  interface cidades{
//   id: number;
//   destino: string;
//   regiao: string;
//   description: string;
//   populacao:string;
//   area: string;
//   prefeito:string;
//   autitude:string;
// }
