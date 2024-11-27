import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-ion-button',
  templateUrl: './ion-button.page.html',
  styleUrls: ['./ion-button.page.scss'],
})
export class IonButtonPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  onClick(){
    console.log('Avatar button clicked');
  }
  goBack() {
    this.navController.back();
  }
}
