import { ListCardComponent } from './components/list-card/list-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ModalComponent } from "./components/modal/modal.component";
import { IonicModule } from "@ionic/angular";
import { FilterSortModalComponent } from './components/filter-sort-modal/filter-sort-modal.component';

@NgModule({
  declarations: [ModalComponent, ListCardComponent, FilterSortModalComponent],
  imports: [IonicModule, CommonModule],
  exports: [CommonModule, ModalComponent, ListCardComponent, FilterSortModalComponent]
})

export class SharedModule { }
