import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() title!: string;
  @Input() isModal!: boolean;

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }

}
