import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightResults } from '../interfaces/flight-results';
import { Observable, Subject } from 'rxjs';
import { Filters } from '../interfaces/filters';
import { AirItinerary } from '../interfaces/air-itinerary';

@Injectable({
  providedIn: 'root',
})
export class FlightsDataService {
  constructor(private http: HttpClient) {}

  getItineraries(): Observable<FlightResults> {
    return this.http.get<FlightResults>('assets/response.json');
  }

  filterSubject = new Subject<Filters>();

  filter(filters: Filters, flights: AirItinerary[]): AirItinerary[] {
    let filteredItineries = flights.filter((itin) => {
      if (!filters.refundable && !itin.isRefundable) {
        console.log(itin.isRefundable);

        return false;
      }
      if (
        (filters.stops.direct &&
          itin.allJourney.flights[0].flightDTO.length != 1) ||
        (filters.stops.one &&
          itin.allJourney.flights[0].flightDTO.length != 2) ||
        (filters.stops.more && itin.allJourney.flights[0].flightDTO.length < 2)
      ) {
        return false;
      }
      return true;
    });
    return filteredItineries;
  }
}
