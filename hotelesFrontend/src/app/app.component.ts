import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private hoteles;
  private hotelesSinFiltro;

  private request = new XMLHttpRequest();
  private name;
  constructor () {
   this.cargar();
  }

  async cargar() {
    this.request.open('GET', 'http://localhost:3000/hoteles');
    this.request.responseType = 'json';
    this.request.send();
    const self = this;
    this.request.onload = function() {
      self.hoteles = self.request.response;
      self.hotelesSinFiltro = self.hoteles;
    };
  }

  async buscarPorNombre(event: any) {
    this.request.open('GET', 'http://localhost:3000/hoteles/' + event.target.value);
    this.request.responseType = 'json';
    this.request.send();
    const self = this;
    this.request.onload = function() {
      self.hoteles = self.request.response;
    };
  }

  crearArrayEstrellas(cantidad: number) {
    const lista = [];
    for (let i = 0 ; i < cantidad; i++) {
      lista.push(i);
    }
    return lista;
  }

  filtrarEstrellas(event: any) {
    console.log(event.target.value);
    this.request.open('GET', 'http://localhost:3000/hoteles/stars/' + event.target.value);
    this.request.responseType = 'json';
    this.request.send();
    const self = this;
    this.request.onload = function() {
      self.hoteles = self.request.response;
    };
  }
}
