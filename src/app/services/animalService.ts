import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { appConfig } from '../app.config'
import 'rxjs/add/operator/map';

@Injectable()
export class AnimalService {
  
  options;
  
  private apipath = '/api/animal';

  constructor(
    private http: Http
  ) { }
 


  getAnimal(){
    return this.http.get(this.apipath).map(res => res.json());
  }

}