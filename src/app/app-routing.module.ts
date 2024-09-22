import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlightResultComponent } from './components/flight-result/flight-result.component';
import { SelectedFlightComponent } from './bonus/selected-flight/selected-flight.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SelectedFlightGuardGuard } from './guards/selected-flight-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results', component: FlightResultComponent },
  { path: 'flight-details', component: SelectedFlightComponent , canActivate:[SelectedFlightGuardGuard] },
  { path: 'not-found' , component:NotFoundComponent},
  { path: '**' , redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
