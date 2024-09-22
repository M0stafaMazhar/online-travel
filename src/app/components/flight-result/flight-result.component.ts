import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlightResults } from 'src/app/interfaces/flight-results';
import { AirItinerary } from 'src/app/interfaces/air-itinerary';
import { FlightsDataService } from 'src/app/services/flights-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss'],
})
export class FlightResultComponent implements OnInit, OnDestroy {
  loadingFlag = true;
  errFlag = false;
  flightResults: FlightResults;
  airItineries: AirItinerary[];
  displayiedItineraries: AirItinerary[];
  filterSubscriptions: Subscription;

  constructor(private flightsServise: FlightsDataService) {}

  ngOnInit(): void {
    this.flightsServise.getItineraries().subscribe(
      //get flight results from data service
      (res) => {
        this.flightResults = res;
        this.airItineries = res.airItineraries;
        this.displayiedItineraries = this.airItineries;
        this.loadingFlag = false;
      },
      (err) => {
        this.errFlag = true;
        this.loadingFlag = false;
      }
    );

    this.filterSubscriptions = this.flightsServise.filterSubject.subscribe(
      //subscribe to filters subject
      (filters) => {
        this.displayiedItineraries = this.flightsServise.filter(
          filters,
          this.airItineries
        );
      }
    );
  }

  ngOnDestroy(): void {
    //removing subscriptions on closing the component
    this.filterSubscriptions.unsubscribe();
  }
}
