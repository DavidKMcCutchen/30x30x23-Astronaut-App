import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { AstronautsComponent } from './astronauts/astronauts.component';
import { LoginComponent, WildComponent } from "@astronaut-app/ui-login";
import { AstronautComponent } from './astronaut/astronaut.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'astros', component: AstronautsComponent},
  {path: 'astros/:id', component: AstronautComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }