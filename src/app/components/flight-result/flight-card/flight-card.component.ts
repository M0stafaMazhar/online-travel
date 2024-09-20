import { Component, Input, OnInit } from '@angular/core';
import { AirItinerary } from 'src/app/interfaces/air-itinerary';
import { Airline } from 'src/app/interfaces/airline';
import { Airport } from 'src/app/interfaces/airport';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent implements OnInit {
  @Input() flight: AirItinerary;
  airline: Airline;
  depAirport: Airport;
  arrivalAirport: Airport;
  numOfStops: number;

  ngOnInit(): void {
    this.numOfStops = this.flight.allJourney.flights[0].flightDTO.length - 1;
    this.airline = this.flight.allJourney.flights[0].flightAirline;
    this.depAirport =
      this.flight.allJourney.flights[0].flightDTO[0].departureTerminalAirport;
    this.arrivalAirport =
      this.flight.allJourney.flights[0].flightDTO[
        this.numOfStops
      ].arrivalTerminalAirport;
  }
}
