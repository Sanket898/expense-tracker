import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  constructor(private modalController: ModalController) { }

  dismissModal() {
    // Dismiss the modal by calling the dismiss method on the modal controller
    this.modalController.dismiss();
  }
}
