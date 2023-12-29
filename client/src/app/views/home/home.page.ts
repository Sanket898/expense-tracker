import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor() { }

  transactions = [
    { data: 2, src: '../../../../assets/icons/cards/shopping bag.svg', color: '#FCEED4' },
    { data: 1, src: '../../../../assets/icons/cards/recurring bill.svg', color: '#EEE5FF' },
    { data: 4, src: '../../../../assets/icons/cards/restaurant.svg', color: '#FDD5D7' },
  ]
}
