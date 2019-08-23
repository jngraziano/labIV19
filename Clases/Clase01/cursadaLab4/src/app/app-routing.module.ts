import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './componentes/login/login.component';



const routes: Routes = [
  { path: 'firstpage',
    component: FirstpageComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
