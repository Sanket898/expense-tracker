import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsModalComponent } from 'src/app/shared/components/modals/settings-modal/settings-modal.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(private modalController: ModalController) { }

  async openModal(option: any) {
    let isNotificationPage = option?.label == 'Notification' ? true : false;
    const dataToSend = {
      title: option?.label,
      options: option?.options,
      isNotificationPageFlag: isNotificationPage
    };
    const settingsModal = await this.modalController.create({
      component: SettingsModalComponent,
      componentProps: {
        data: dataToSend,
      },
    });

    await settingsModal.present();
  }

  options: Array<any> = [
    { label: 'Currency', defaultOption: 'Rupee', options: ['Indian Rupee (INR)'] },
    { label: 'Language', defaultOption: 'English', options: ['English'] },
    { label: 'Theme', defaultOption: 'Dark', options: ['Light', 'Dark', 'Use device theme'] },
    { label: 'Security', defaultOption: 'Fingerprint', options: ['PIN', 'Fingerprint', 'Face ID'] },
    { label: 'Notification', defaultOption: '' },
  ]

}
