import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {

  constructor() { }

  accounts: Array<any> = [
    { name: 'HDFC Bank', balance: '7254' },
    { name: 'DBS Bank', balance: '12090' },
    { name: 'SBI Bank', balance: '4836' },
  ]
}
