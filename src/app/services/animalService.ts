import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { appConfig } from '../app.config'
import 'rxjs/add/operator/map';

@Injectable()
export class AnimalService {
  
  options;
  results;
  public postList;
  data: any = []

  private apipath = 'http://localhost:4000/api/animal';

  constructor(
    private http: Http
  ) { }
 

  
 
  getAnimal(){
    return new Promise(resolve => {
      return this.http.get(this.apipath)
        .map(res => {
          return res.json();
        })
        .subscribe(data => {
          this.data = data;
          console.log(data);
          resolve(this.data);
        });
    });




    // this.http.get(this.apipath)
    // .subscribe(result => {
    //   this.postList = result;
    //   resolve(this.results);
    //   console.log('this.postList', this.postList);
    //   // this.postList.forEach(post => {
    //   //   post.data.created = post.data.created * 1000;
    //   // })
    
  }

  


}


