import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: HomeLayoutComponent,
    canActivate: [],
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: '', redirectTo: '/dashboard',pathMatch: 'full'
      }
    ]
  },
  {
    path: '', component: LoginLayoutComponent,
    children: [

    ]
  },
{
  path: '**', redirectTo: ''
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
