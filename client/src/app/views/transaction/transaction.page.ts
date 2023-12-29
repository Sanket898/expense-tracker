import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage {

  constructor() { }

  arr = [1, 2]

  transactions = [
    { data: 2, src: '../../../../assets/icons/cards/shopping bag.svg', color: '#FCEED4' },
    { data: 1, src: '../../../../assets/icons/cards/recurring bill.svg', color: '#EEE5FF' },
    { data: 4, src: '../../../../assets/icons/cards/restaurant.svg', color: '#FDD5D7' },
    { data: 3, src: '../../../../assets/icons/cards/salary.svg', color: '#CFFAEA' },
    { data: 3, src: '../../../../assets/icons/cards/car.svg', color: '#BDDCFF' },
  ]

}
