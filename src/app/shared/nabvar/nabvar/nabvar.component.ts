import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {
  title = {
    nav1: "Novedades",
    nav2: "Contacto",
    nav3: "Transporte",
    nav4: "Preguntas Frecuentes"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
