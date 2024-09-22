import { Component, Input } from '@angular/core';
import { Airline } from 'src/app/interfaces/airline';
import { Airport } from 'src/app/interfaces/airport';
import { FlightDTO } from 'src/app/interfaces/flight-dto';

@Component({
  selector: 'app-dto-stop',
  templateUrl: './dto-stop.component.html',
  styleUrls: ['./dto-stop.component.scss'],
})
export class DtoStopComponent {
  @Input() flightStop: FlightDTO; // flight stops array

  airline: Airline;
  depAirport: Airport;
  arrivalAirport: Airport;
  numOfStops = 0;

  ngOnInit(): void {
    // initialize the data displayed in the component
    this.airline = this.flightStop.flightAirline;
    this.depAirport = this.flightStop.departureTerminalAirport;
    this.arrivalAirport = this.flightStop.arrivalTerminalAirport;
  }
}
