import { AirItinerary } from './air-itinerary';
import { SearchCriteria } from './search-criteria';

export interface ResultException {
  code: string;
  exceptionMessage: string;
}

export interface FlightResults {
  status: string;
  searchResultException: ResultException;
  searchCriteria: SearchCriteria;
  airItineraries: AirItinerary[];
  airlines: string[];
  cabinClasses: string[];
}
