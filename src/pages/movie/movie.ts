import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
  movieInTheater;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public data: DataProvider
  ) {
  }

  ionViewDidLoad() {
    this.data.fetchMovieInTheater().subscribe(res => {
      console.log(res)
      this.movieInTheater = res['subjects']
    })
  }
}
