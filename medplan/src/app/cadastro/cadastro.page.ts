import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

//Form
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

	private user: SocialUser;
  private loggedIn: boolean;
  form: FormGroup;

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController
   ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.form = new FormGroup({
      // form controls
      // arg1 - intial state/value of this control
      // arg2 - single validator or an array of validators
      // arg3 - async validators
      'name': new FormControl(null),
      'surname': new FormControl(null),
      'cpf': new FormControl(null),
      'rg': new FormControl(null),
      'cel': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null)
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

  clickOnLogin() {
    this.navCtrl.navigateForward('/login');
  }
  
  clickOnComparacao() {
    this.navCtrl.navigateForward('/comparacao')
  }
}
