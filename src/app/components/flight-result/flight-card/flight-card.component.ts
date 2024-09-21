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

  ngOnInit(): void {}
}
