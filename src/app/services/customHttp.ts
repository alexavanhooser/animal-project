import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnimalService {
  options;
  apipath = '/api/animal';
  constructor(
    private http: Http
  ) { }
 
  getAnimal(){
    return this.http.get(this.apipath + 's', this.options).map(res => res.json());
  }
} 