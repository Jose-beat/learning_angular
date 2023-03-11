import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackPageComponent } from './pages/track-page/track-page.component';

const routes: Routes = [
  {
    path: "",
    component: TrackPageComponent,
    //Si el router router outlet tiene un nombre hay que especificar el nombre de del outlet que se usara para remderizar el componente 
    outlet: "child"
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
