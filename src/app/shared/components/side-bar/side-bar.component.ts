import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  linksMenu: Array <any> = [

    {
      name: "Home",
      icon: "uil-estate"
    },

    {
      name: "Buscar",
      icon: "uil-estate"
    }
  ];

  mainMenu = {
    defaultOptions: <any>[],
    accessLink: <any>[]
  };

  customOptions = <any>[];


  // } = {defaultOptions: [], accessLink: [] }



  constructor(){}
  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: "Home",
        icon: "uil uil-estate",
        router: ['', 'auth']

      },
      {
        name: "Buscar",
        icon: "uil uil-search",
        router: ['', 'auth']

      },
      {
        name: "Tu Biblioteca",
        icon: "uil uil-chart",
        router: ['', 'auth']

      }
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      },
   
    ];

    this.customOptions = [
      {
        name: 'Mi lista °1',
        router: ['/']
      },
      {
        name: 'Mi lista °2',
        router: ['/']
      },
      {
        name: 'Mi lista °3',
        router: ['/']
      },
      {
        name: 'Mi lista °4',
        router: ['/']
      },
    ]

  }

}
