import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  expenseForm!: FormGroup;

  constructor(
    private modalController: ModalController,
    private http: HttpService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
  }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.expenseForm = this.fb.group({
      name: [''],
      category: [''],
      account: [''],
      amount: [''],
      date: [new Date],
      description: [''],
    })
  }

  dismissModal() {
    // Dismiss the modal by calling the dismiss method on the modal controller
    this.modalController.dismiss();
  }

  createExpense() {

  }

  submitForm() {
    console.log(this.expenseForm.value);
    const formBody = this.expenseForm.value;

    this.http.post('expenses', formBody).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        this.toastr.error(err?.error?.message)
        console.log(err.error.message);
      }
    });
  }
}
