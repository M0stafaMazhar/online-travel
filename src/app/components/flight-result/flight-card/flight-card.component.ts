import { Component, Input } from '@angular/core';
import { AirItinerary } from 'src/app/interfaces/air-itinerary';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent {
  @Input() flight: AirItinerary;

  selecttFlight() {
    localStorage.setItem('selectedFlight', JSON.stringify(this.flight));
  }
}
