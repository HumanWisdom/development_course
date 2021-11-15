import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path:'users',
    loadChildren:() => import('./users/users.module')
    .then(mod => mod.UsersModule)
  },
  {
    path:'login',
    loadChildren:() => import('./login/login.module')
    .then(mod => mod.LoginModule)
  }, 
  {
    path:'frameworks',
    loadChildren:() => import('./frameworks/frameworks.module')
    .then(mod => mod.FrameworksModule)
  }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
