import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor() { }

  menuItems = [
    { index: 1, src: '../../../../assets/icons/home/wallet.svg', label: 'Account', path: 'account' },
    { index: 2, src: '../../../../assets/icons/home/settings.svg', label: 'Settings', path: 'settings' },
    { index: 3, src: '../../../../assets/icons/home/upload.svg', label: 'Export Data', path: 'export-data' },
    { index: 4, src: '../../../../assets/icons/home/logout.svg', label: 'Logout' },
  ]

}
