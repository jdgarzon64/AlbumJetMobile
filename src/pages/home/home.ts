import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  homeImagesList: any;
  mySlideOptions = {
    pager:true
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,private homeService: HomeProvider) {
    this. getHomeImage();
    console.log(this.homeImagesList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  getHomeImage(){
    this.homeService.getHomeImages().subscribe(x => this.homeImagesList = x);
  }
}
