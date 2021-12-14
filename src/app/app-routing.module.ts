import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardian } from './api/services/login-guardian.service';
import { ErrorComponent } from './pages/error/error.component';

//Importacion de componentes
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RegalosComponent } from './pages/regalos/regalos.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
 // { path: 'menu', component: MenuComponent}
//  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  { 
    path: '',
    component: MenuComponent,
    canActivate:[LoginGuardian],
    children:[
      {path:'welcome', component:WelcomeComponent},
      {path:'regalos',component:RegalosComponent}
    ]
},
{
  path:"**",component:ErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
