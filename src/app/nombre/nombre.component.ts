import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css','../../styles/scss/auth.scss','../../styles/scss/cosa.scss']
})
export class NombreComponent implements OnInit {
 

  nombre: string;
  animacion: boolean;
  paused: boolean;
  constructor() { }

  ngOnInit(): void {
  }

keydown(){
  
  console.log("Tamaño nombre :"+this.nombre.length);
  this.animacion= false;
  this.paused=true;
  
  //var el=$('.animacion').removeClass('animacion').addClass('paused');

  //let element = document.getElementsByClassName('animacion');
 

  
  
  if(this.nombre.length<20){
    document.getElementById('cara').style.left = (0+this.nombre.length)+ "px";
    document.getElementById('cara').style.top = 25+ "px";
    document.getElementById('ojoIzq').style.left = 5+(2*this.nombre.length)+ "px";
    document.getElementById('irisIzq').style.left = 5+(0.2*this.nombre.length)+ "px";
    document.getElementById('brilloIzq').style.left = 5+(0.2*this.nombre.length)+ "px";
    document.getElementById('ojoDch').style.left = 45+(2*this.nombre.length)+ "px";
    document.getElementById('irisIzq').style.left = 5+(0.2*this.nombre.length)+ "px";
    document.getElementById('brilloIzq').style.left = 5+(0.2*this.nombre.length)+ "px";
  }
  
  //console.log(document.getElementById('ojoIzq').top+"--"+document.getElementById('ojoIzq').left);

}
/*

$("#login, #password, #tuNombre").focusout(function(){	

document.getElementById('cara').style.left = 0  + "px";
  document.getElementById('cara').style.top = 0+ "px";
document.getElementById('ojoIzq').style.left = 25+ "px";
document.getElementById('ojoIzq').style.top = 30+ "px";
  document.getElementById('irisIzq').style.left = 5+ "px";
  document.getElementById('irisIzq').style.top = 40+ "%";
  document.getElementById('brilloIzq').style.left = 5+ "px";
  document.getElementById('brilloIzq').style.top =42+ "%";

  document.getElementById('ojoDch').style.left = 65+ "px";
  document.getElementById('ojoDch').style.top = 30+ "px";
  document.getElementById('irisDch').style.left = 5+ "px";
  document.getElementById('irisDch').style.top = 40+ "%";
  document.getElementById('brilloDch').style.left = 5+ "px";
  document.getElementById('brilloDch').style.top =42+ "%";


  $('.paused').removeClass('paused').addClass('animacion');

});

$("#password").focus(function(){
  var el=$('.animacion').removeClass('animacion').addClass('paused');

  document.getElementById('cara').style.left = 0+ "px";
    document.getElementById('cara').style.top = -30+ "px";
    document.getElementById('ojoIzq').style.left = 25+ "px";
    document.getElementById('ojoIzq').style.top = 30+ "px";
    document.getElementById('irisIzq').style.left = 15+ "%";
    document.getElementById('irisIzq').style.top = 0+ "%";
    document.getElementById('brilloIzq').style.left = 15+ "%";
    document.getElementById('brilloIzq').style.top =5+ "%";

    document.getElementById('ojoDch').style.left = 65+ "px";
    document.getElementById('ojoDch').style.top = 30+ "px";
    document.getElementById('irisDch').style.left = 15+ "%";
    document.getElementById('irisDch').style.top = 0+ "%";
    document.getElementById('brilloDch').style.left = 15+ "%";
    document.getElementById('brilloDch').style.top = 5+ "%";
  
});
*/




}
