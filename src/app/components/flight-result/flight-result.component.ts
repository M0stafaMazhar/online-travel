import { Component, OnInit } from '@angular/core';
import { FlightResults } from 'src/app/interfaces/flight-results';
import { AirItinerary } from 'src/app/interfaces/air-itinerary';
import { FlightsDataService } from 'src/app/services/flights-data.service';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss'],
})
export class FlightResultComponent implements OnInit {
  flightResults: FlightResults;
  airItineries: AirItinerary[];
  displayiedItineraries: AirItinerary[];
  constructor(private flightsServise: FlightsDataService) {}
  ngOnInit(): void {
    this.flightsServise.getItineraries().subscribe((res) => {
      this.flightResults = res;
      this.airItineries = res.airItineraries;
      this.displayiedItineraries = this.airItineries;
    });

    this.flightsServise.filterSubject.subscribe((filters) => {
      this.displayiedItineraries = this.flightsServise.filter(
        filters,
        this.airItineries
      );
    });
  }
}
