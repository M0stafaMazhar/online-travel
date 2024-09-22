import { Component, Input, OnInit } from '@angular/core';
import { Airline } from 'src/app/interfaces/airline';
import { Airport } from 'src/app/interfaces/airport';
import { Flight } from 'src/app/interfaces/flight';

@Component({
  selector: 'app-flight-path',
  templateUrl: './flight-path.component.html',
  styleUrls: ['./flight-path.component.scss'],
})
export class FlightPathComponent implements OnInit {
  @Input() singleFlight: Flight; //flight data
  @Input() flightDates: {
    duration: number;
    depDate: string;
    arriveDate: string;
  };

  airline: Airline;
  depAirport: Airport;
  arrivalAirport: Airport;
  numOfStops: number;

  ngOnInit(): void {
    //initialize displayed data
    this.airline = this.singleFlight.flightAirline;
    this.numOfStops = this.singleFlight.stopsNum;
    this.depAirport = this.singleFlight.flightDTO[0].departureTerminalAirport;
    this.arrivalAirport =
      this.singleFlight.flightDTO[this.numOfStops].arrivalTerminalAirport;
  }
}
