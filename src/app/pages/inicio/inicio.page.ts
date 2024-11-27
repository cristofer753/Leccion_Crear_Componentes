import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'person-outline',
      name: 'ion-avatar',
      redirectTo: '/ion-avatar'
    },
    {
      icon: 'keypad-outline',
      name: 'ion-button',
      redirectTo: '/ion-button'
    },
  ];
  constructor() { }
  ngOnInit() {
  }
}
