import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';

const routes: Routes = [
  {
    path: 'inventario',
    component: InventarioComponent,
    loadChildren: ()=> import('../app/inventario/inventario.module').then(m=>m.InventarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
