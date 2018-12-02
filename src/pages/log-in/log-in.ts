import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../../model/user';
import { ErrorState } from '../../share/error-matcher/error-state-matcher';
/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {


  user: User = new User();
  matcher = new ErrorState();
  logInForm: FormGroup;
  usersList: User[];
  ERROR_LOG_IN = 'this account doesn\'t exist!';
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private fb: FormBuilder) {
    this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  buildForm() {
    this.logInForm = this.fb.group({
      user: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }
  ngOnInit(): void {
    // this.userService.getUsersFromFirebase().subscribe((list: User[]) => {
    //   this.usersList = list;
    // });
  }
  onSubmit() {
    if (this.isUserValid(this.user)) {
      // const userOk = this.authService.login(this.user.user, this.user.password);
      // userOk.then(value => {
      //   this.router.navigate(['/main']);
      // })
      //   .catch(() => {
      //     this.openSnackBar(this.ERROR_LOG_IN);
      //   });
      console.log('escribi en el localStorage');
    }
  }

  isUserValid(localUser: User) {
    const userOK: User = this.usersList.filter(
      (user: User) => user.password === localUser.password && user.user === localUser.user)[0];
    if (userOK) {
      localStorage.setItem('activeSession', 'true');
      localStorage.setItem('userId', userOK.userId + '');
      localStorage.setItem('userName', userOK.name);
      localStorage.setItem('user', userOK.user);
      localStorage.setItem('profilePicture', userOK.profilePicture);
      return userOK;
    } else {
      return null;
    }
  }
}
