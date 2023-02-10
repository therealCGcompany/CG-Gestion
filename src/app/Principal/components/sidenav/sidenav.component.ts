import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { navbarDAta } from './nav-data';
import {transition, trigger, animate, style, keyframes} from '@angular/animations';
import { INavbarData, fadeInOut, SideNavToggle } from './helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations:[
    fadeInOut,
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg)',offset:'0'}),
          style({transform: 'rotate(2turn)',offset:'1'})
        ])
        )
      ])
    ])

  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed:boolean = false;
  screenWidth= 0;
  navData = navbarDAta;
  multiple: boolean  = false;

  @HostListener('window: resize',['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 1411){
      this.collapsed = false;
      this.onToggleSideNav.emit(
        {collapsed: this.collapsed,
          screenWidth: this.screenWidth});
    }
  }
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit(
      {collapsed: this.collapsed,
        screenWidth: this.screenWidth});
  }
  closeSidenav():void{
    this.collapsed = false;
    this.onToggleSideNav.emit(
      {collapsed: this.collapsed,
        screenWidth: this.screenWidth});
  }
  handleClick(item: INavbarData):void{
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  getActiveClass(data:INavbarData): string{
    return this.router.url.includes(data.routerLink)? 'active': '';
  }

  getStyle(data:INavbarData):string{
    let estilo: string = '';
    if(data.items && this.collapsed){
      estilo = 'has-arrow';
    }
    if(!this.collapsed){
      estilo += ' border-radius';
    }
    return estilo;

  }

  shrinkItems(item: INavbarData):void{
    if(!this.multiple){
      for(let modelItem of this.navData){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
    }
  }

}
