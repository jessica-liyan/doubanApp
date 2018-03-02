import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../models/movie.interface';

@IonicPage({
  name: 'movie-detail',
  segment: 'movie-detail/:id'
})
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  id:string;
  movie: Observable<object>;
  title;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public data: DataProvider
  ) {
    this.id = navParams.get('id')
    this.title = navParams.get('title')
    this.movie = this.data.fetchMovieDetail(this.id)
  }

  ionViewDidLoad() {
    
  }
}
