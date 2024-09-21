import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightResults } from '../interfaces/flight-results';
import { Observable, Subject } from 'rxjs';
import { Filters } from '../interfaces/filters';
import { AirItinerary } from '../interfaces/air-itinerary';
import { Airport } from '../interfaces/airport';

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
      let depAirportName =
        itin.allJourney.flights[0].flightDTO[0].departureTerminalAirport.airportName.toLocaleLowerCase();

      let numOfStops = itin.allJourney.flights[0].flightDTO.length;

      let noStopsFilter: boolean =
        !filters.stops.direct && !filters.stops.one && !filters.stops.more;

      let stopsFilter: boolean =
        noStopsFilter ||
        (filters.stops.direct && numOfStops == 1) ||
        (filters.stops.one && numOfStops == 2) ||
        (filters.stops.more && numOfStops > 2);

      let refundableFilter =
        !filters.refundable || (filters.refundable && itin.isRefundable);

      let searchFilter = depAirportName.includes(
        filters.airportQuery.toLocaleLowerCase()
      );

      return stopsFilter && refundableFilter && searchFilter;
    });
    return filteredItineries;
  }
}
