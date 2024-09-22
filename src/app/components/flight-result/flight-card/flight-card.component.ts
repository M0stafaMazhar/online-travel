import { Component, Input } from '@angular/core';
import { AirItinerary } from 'src/app/interfaces/air-itinerary';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent {
  @Input() flight: AirItinerary;

  selectFlight() {
    //sore selected flght in local storage to handle page refresh
    localStorage.setItem('selectedFlight', JSON.stringify(this.flight));
  }
}
