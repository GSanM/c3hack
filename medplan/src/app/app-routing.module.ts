import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'dados-usuario', loadChildren: './dados-usuario/dados-usuario.module#DadosUsuarioPageModule' },
  { path: 'recomendacao', loadChildren: './recomendacao/recomendacao.module#RecomendacaoPageModule' },
  { path: 'comparacao', loadChildren: './comparacao/comparacao.module#ComparacaoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
