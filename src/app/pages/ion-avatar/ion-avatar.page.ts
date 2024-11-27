import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ion-avatar',
  templateUrl: './ion-avatar.page.html',
  styleUrls: ['./ion-avatar.page.scss'],
})
export class IonAvatarPage implements OnInit {

  constructor(private navController: NavController) { }

  showAvatar: boolean = false;

  ngOnInit() { }

  toggleAvatar() {
    this.showAvatar = !this.showAvatar;
  }

  goBack() {
    this.navController.back();
  }
}

