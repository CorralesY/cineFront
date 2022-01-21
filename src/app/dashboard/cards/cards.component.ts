import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public cards: any[] = [];
  //Select
  public opcionSelecct: string = '0';
  public verSelecct: string = '';
  //filterMes
  public opicionFilterMes: string = '0';
  public verFilterMes: string = '';
  //Search
  public filtercard: any = '';
  //Text
  public select = ["Better Call Saul", "Breaking Bad"]
  public filterMes = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]

  constructor(private homeServices: HomeService, private _router: Router) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.homeServices.getCards().subscribe((res: any) => {
      this.cards = res;
      // console.log(res);
    })
  }
  searchFilterMes() {
    this.verFilterMes = this.opicionFilterMes;
    // console.log(this.verFilterMes);
  }

  searchCategory() {
    this.verSelecct = this.opcionSelecct;
    // console.log(this.verSeleccion);
    this.homeServices.searchCategory(this.verSelecct).subscribe((res: any) => {
      this.cards = res;
      if (this.verSelecct === '0') {
        this.getCards();
      }
      // console.log(res);
    })
  }
}


