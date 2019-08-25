import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

import { provideConfig } from './socialLoginConfig';

//Google Login
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],

  imports: [
    // NgbModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: AuthServiceConfig, useFactory: provideConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
