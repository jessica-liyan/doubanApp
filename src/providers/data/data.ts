import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  baseUrl = 'https://api.douban.com/v2';

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  //正在热映
  fetchMovieInTheater(){
    return this.http.jsonp(`${this.baseUrl}/movie/in_theaters`, 'callback')
  }
  // 即将上映
  fetchMovieComing(){
    return this.http.jsonp(`${this.baseUrl}/movie/coming_soon`, 'callback')
  }
  // 电影详情
  fetchMovieDetail(id){
    return this.http.jsonp(`${this.baseUrl}/movie/subject/${id}`, 'callback')
  }


}
