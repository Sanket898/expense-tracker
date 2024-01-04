import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogoutComponent } from 'src/app/shared/components/modal/logout/logout.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(private modalController: ModalController) { }

  menuItems = [
    { index: 1, src: '../../../../assets/icons/home/wallet.svg', label: 'Account', path: 'account' },
    { index: 2, src: '../../../../assets/icons/home/settings.svg', label: 'Settings', path: 'settings' },
    { index: 3, src: '../../../../assets/icons/home/upload.svg', label: 'Export Data', path: 'export-data' },
    { index: 4, src: '../../../../assets/icons/home/logout.svg', label: 'Logout', background: '#FFE2E4' },
  ]

  async profileActions(item: any) {
    if (item?.label == 'Logout') {
      const logOutModal = await this.modalController.create({
        component: LogoutComponent,
        initialBreakpoint: 0.25,
        breakpoints: [0.25]
      })
      await logOutModal.present();
    }
  }
}
