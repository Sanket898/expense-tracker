import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastController: ToastController) { }

  async success(message: string) {
    const toast = await this.toastController.create({
      message: message,
      color:'success',
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

  async error(message: string) {
    const toast = await this.toastController.create({
      message: message,
      color:'danger',
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
