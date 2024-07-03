import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  
  {
    path: 'auth',
    loadChildren: () => import('./pages/welcome/auth/auth.module').then( m => m.AuthPageModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule),
  },
  {
    path: 'gestion',
    loadChildren: () => import('./pages/main/gestion/gestion.module').then( m => m.GestionPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/main/gestion/doc/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/main/gestion/doc_Dentista/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/main/gestion/doc_fisio/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/main/gestion/doc_oculista/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/main/profile/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'captcha',
    loadChildren: () => import('./pages/welcome/captcha/captcha.module').then( m => m.CaptchaPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
