import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlightResultComponent } from './components/flight-result/flight-result.component';
import { SelectedFlightComponent } from './bonus/selected-flight/selected-flight.component';
import { FilterComponent } from './components/flight-result/filter/filter.component';
import { FlightCardComponent } from './components/flight-result/flight-card/flight-card.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { ConvrtTimePipe } from './pipes/convert-time.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { DisableArabicDirective } from './directives/disable-arabic.directive';
import { FlightPathComponent } from './components/flight-result/flight-card/flight-path/flight-path.component';
import { DtoStopComponent } from './components/dto-stop/dto-stop.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightResultComponent,
    SelectedFlightComponent,
    FilterComponent,
    FlightCardComponent,
    SearchCriteriaComponent,
    ConvrtTimePipe,
    ErrorComponent,
    NoDataComponent,
    LoadingSpinnerComponent,
    DisableArabicDirective,
    FlightPathComponent,
    DtoStopComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
