import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  categoriaSeleccionada:string;
  paisSeleccionado:string;
  @Output() parametroSeleccionado = new EventEmitter<any>();

  categorias:any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnología'}
  ];

  paises:any[] = [
    {value: 'ar', nombre: 'Argentina'},
    {value: 'br', nombre: 'Brazil'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'hu', nombre: 'Hungría'},
    {value: 'mx', nombre: 'Mexico'},
    {value: 'gb', nombre: 'Reino Unido'}
  ]
  constructor() { 
    this.categoriaSeleccionada = 'general';
    this.paisSeleccionado = 'ar';
  }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS = [
      {categoria: this.categoriaSeleccionada, pais: this.paisSeleccionado}
    ];
    this.parametroSeleccionado.emit(PARAMETROS);
  }

}
