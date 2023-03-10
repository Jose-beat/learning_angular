import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
  // {
  //   path: '', //TODO: localhost
  //   component: ExampleComponent
  //  } 

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
