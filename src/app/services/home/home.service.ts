import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( public httpCliente:HttpClient) { }
  getCards(){
    return this.httpCliente.get(`${baseUrl}/characters`);
  }

  searchCategory(category:String){
    return this.httpCliente.get(`${baseUrl}/characters?category=${category}`);
  }

}
