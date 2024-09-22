import { Component } from '@angular/core';
import { AirItinerary } from 'src/app/interfaces/air-itinerary';

@Component({
  selector: 'app-selected-flight',
  templateUrl: './selected-flight.component.html',
  styleUrls: ['./selected-flight.component.scss'],
})
export class SelectedFlightComponent {
  selectedFlight: AirItinerary = JSON.parse(
    localStorage.getItem('selectedFlight')
  );
}
