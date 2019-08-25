import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

//Form
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  
  constructor(private navCtrl: NavController,
              private authService: AuthService) { }
  
  ngOnInit() {

    this.formLogin = new FormGroup({
      // form controls
      // arg1 - intial state/value of this control
      // arg2 - single validator or an array of validators
      // arg3 - async validators
      'lEmail': new FormControl(null),
      'lPassword': new FormControl(null)
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });

  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
  }

  clickOnCadastro() {
    this.navCtrl.navigateForward('/cadastro');
  }
}
