import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [InventarioComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports: [InventarioComponent]
})
export class InventarioModule { }
