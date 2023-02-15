import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './Principal/components/body/body.component';
import { SidenavComponent } from './Principal/components/sidenav/sidenav.component';
import { SublevelMenuComponent } from './Principal/components/sidenav/sublevel-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { InventarioModule } from './inventario/inventario.module';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InventarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
