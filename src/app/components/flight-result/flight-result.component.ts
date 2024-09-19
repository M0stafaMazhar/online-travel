import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlightResults } from 'src/app/interfaces/flight-results';
import { AirItinerary } from 'src/app/interfaces/air-itinerary';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss'],
})
export class FlightResultComponent implements OnInit {
  flightResults: FlightResults;
  airIt: AirItinerary[];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('assets/response.json').subscribe((res: FlightResults) => {
      this.flightResults = res;
      this.airIt = res.airItineraries;
    });
  }
}
