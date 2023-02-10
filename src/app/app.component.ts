import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from './Principal/components/sidenav/sidenav.component';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cg-gestión';
  @ViewChild(SidenavComponent)  sidenavCollapsed!: SidenavComponent;

  constructor() { }

  ngOnInit(): void {
  }
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  cambiarCollapsed(){
    this.isSideNavCollapsed = false;
    this.sidenavCollapsed.toggleCollapse();

  }
}
