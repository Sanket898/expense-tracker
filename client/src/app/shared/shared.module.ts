import { ListCardComponent } from './components/list-card/list-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ModalComponent } from "./components/modals/modal.component";
import { IonicModule } from "@ionic/angular";
import { FilterSortModalComponent } from './components/modals/filter-sort-modal/filter-sort-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SettingsModalComponent } from './components/modals/settings-modal/settings-modal.component';
import { LogoutComponent } from './components/modals/logout/logout.component';

let components = [
  ModalComponent,
  ListCardComponent,
  FilterSortModalComponent,
  HeaderComponent,
  SettingsModalComponent,
  LogoutComponent
]

@NgModule({
  declarations: [...components],
  imports: [IonicModule, CommonModule, RouterModule],
  exports: [CommonModule, ...components]
})

export class SharedModule { }
