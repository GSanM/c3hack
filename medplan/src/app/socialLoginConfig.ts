import { AuthServiceConfig } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("239841328277-h3i0ar5ggafr4oct6erskq49jcnn4boa.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1207689299392815')
  }
]);
  
  export function provideConfig() {
    return config;
  }