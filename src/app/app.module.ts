import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { MusicPage } from '../pages/music/music';
import { MoviePage } from '../pages/movie/movie';
import { BookPage } from '../pages/book/book';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

const pages = [
  MyApp,
  MoviePage,
  MusicPage,
  BookPage
]
@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
