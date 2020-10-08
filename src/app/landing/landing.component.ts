import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  tareas=['amigos', 'suma1','suma', 'sumaCon', 'resta','restaCon', 'tablas', 'tablas2', 'multiplicarDeUno', 'multiplicarDeDos', 'dividir', 'dividirDeDos'];

  juegos=['bunny', 'volando','pompas','pizzero', 'memcolor', 'cubo'];

  constructor() { }

  ngOnInit(): void {    

  }

}
