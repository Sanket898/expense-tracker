import { ListCardComponent } from './components/list-card/list-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ModalComponent } from "./components/modal/modal.component";
import { IonicModule } from "@ionic/angular";
import { FilterSortModalComponent } from './components/filter-sort-modal/filter-sort-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SettingsModalComponent } from './components/modal/settings-modal/settings-modal.component';

@NgModule({
  declarations: [ModalComponent, ListCardComponent, FilterSortModalComponent, HeaderComponent, SettingsModalComponent],
  imports: [IonicModule, CommonModule, RouterModule],
  exports: [CommonModule, ModalComponent, ListCardComponent, FilterSortModalComponent, HeaderComponent, SettingsModalComponent]
})

export class SharedModule { }
