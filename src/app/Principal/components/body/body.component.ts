import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Output() cambiarCollapsed: EventEmitter<boolean> = new EventEmitter();
  sizeVentana: number = 0;

  styleObject(): Object{
    if(this.collapsed &&  window.innerWidth <= 1411){
      return {overflow: 'hidden' }
    }else{
      return { };
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

  getBodyClass():string{

    let styleClass = '';
    this.sizeVentana = window.innerWidth;

    if(this.collapsed && this.screenWidth> 1411){

      styleClass = 'body-trimmed';

    }else if(this.collapsed && this.screenWidth <= 1411 && this.screenWidth>0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

  ocultarSidenav(){

    this.collapsed = false;
    this.cambiarCollapsed.emit(false);
  }

}
