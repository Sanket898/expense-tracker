import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {

  constructor(private modalController: ModalController) { }

  dismissModal() {
    this.modalController.dismiss();
  }
}
