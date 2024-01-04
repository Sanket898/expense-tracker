import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
})
export class SettingsModalComponent {

  @Input() options!: Array<any>;
  @Input() title!: string;
  @Input() isNotificationPageFlag!: boolean;

  receivedData: any;
  selectedOptionIndex!: number;

  constructor(private modalController: ModalController, private navParams: NavParams) {
    this.receivedData = this.navParams.get('data');
    this.title = this.receivedData?.title;
    this.options = this.receivedData?.options;
    this.isNotificationPageFlag = this.receivedData?.isNotificationPageFlag;
  }

}
