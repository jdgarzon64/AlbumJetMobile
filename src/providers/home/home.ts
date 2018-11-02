import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { STICKERS } from '../../assets/enviroments/mock/image-home-mock';
import { of } from 'rxjs/observable/of';
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {
homeImagesList :any;
  constructor(public http: HttpClient) {
    // this.homeImagesList = Observable.create(() => {
    //   this.homeImagesList = STICKERS;
    // });
  }

  getHomeImages(): Observable<any>{
    this.homeImagesList = STICKERS;
    return of(this.homeImagesList);
  }

}
