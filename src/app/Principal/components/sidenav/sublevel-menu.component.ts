import { Component, OnInit, Input } from '@angular/core';
import { INavbarData, fadeInOut } from './helper';
import {state, transition, trigger, animate, style} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length>0"
    [@submenu]="expanded
    ? {value: 'visible',
      params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
    height:'*'}}
    :{value: 'hidden',
    params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
    height:'0'}}"
      class="sublevel-nav" >
      <li *ngFor="let item of data.items" class="sublevel-nav-item" [ngClass]="!item.expanded?'':'activado'">
        <a class="sublevel-nav-link"
          (click)="handleClick(item)"
          *ngIf="item.items && item.items.length>0"
          [ngClass]="getActiveClass(item)"
          [class]="item.items && collapsed? !item.expanded? 'has-arrow': 'has-arrow':''">
          <span class="sublevel-link-text" *ngIf="collapsed">
            {{item.label}}
          </span>
        </a>
        <a class="sublevel-nav-link"
            *ngIf="!item.items || (item.items && item.items.length ===0)"
            [routerLink]="[item.routerLink]"
            routerLinkActive="active-sublevel"
            [routerLinkActiveOptions]="{exact:true}">
          <span class="sublevel-link-text" *ngIf="collapsed">
            {{item.label}}
          </span>
        </a>
        <div *ngIf="item.items && item.items.length>0">
          <app-sublevel-menu
            [data]="item"
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded">
          </app-sublevel-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.css'],
  animations: [
    fadeInOut,
    trigger('submenu',[
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible',style({
        height:'*',

      })),
      transition('visible<=>hidden',[style({overflow: 'hidden'}),
      animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data : INavbarData = {
    routerLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean|undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  handleClick(item: any):void{
    if(!this.multiple){
      if(this.data.items&& this.data.items.length>0){
        for(let modelItem of this.data.items){
          if(item !== modelItem && modelItem.expanded){
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

  getActiveClass(item: INavbarData):string{
    return this.router.url.includes(item.routerLink)
    ?'active-sublevel has-arrow'
    : 'has-arrow';
  }

}
