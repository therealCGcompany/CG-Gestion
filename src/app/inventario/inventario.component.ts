import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})

export class InventarioComponent implements OnInit {
  buscar: any;
  tabla = [
    {id:1,first:"Alex",last:"González",handle:"@mdo"},
    {id:2,first:"Jose",last:"Díaz",handle:"@fat"},
    {id:3,first:"Maria",last:"Rodríguez",handle:"@test"},
    {id:4,first:"Raul",last:"Fernández",handle:"@mdo"},
    {id:5,first:"Martha",last:"Díaz",handle:"@tws"},
    {id:6,first:"Jesus",last:"López",handle:"@test"},
    {id:7,first:"Miguel",last:"Cruz",handle:"@mdo"},
    {id:8,first:"Sara",last:"Martínez",handle:"@fat"}
    ]
  constructor() { }

  ngOnInit() { }
}