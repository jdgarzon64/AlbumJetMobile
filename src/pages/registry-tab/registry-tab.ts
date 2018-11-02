import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the RegistryTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registry-tab',
  templateUrl: 'registry-tab.html'
})
export class RegistryTabPage {

  homeRoot = 'HomePage'
  logInRoot = 'LogInPage'
  registryRoot = 'RegistryPage'


  constructor(public navCtrl: NavController) {}

}
