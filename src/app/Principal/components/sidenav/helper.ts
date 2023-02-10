import {transition, trigger, animate, style} from '@angular/animations';

export interface INavbarData {
  routerLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: INavbarData[];
}

export interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

export const fadeInOut = trigger('fadeInOut',[
  transition(':enter',[
    style({display: 'none'}),
    animate('290ms',
    style({display:'block'}))
  ]),
  transition(':leave',[
    style({opacity: 0}),
    animate('0ms',
    style({opacity:1}))
  ])
])
