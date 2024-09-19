import { Airline } from './airline';
import { FlightDTO } from './flight-dto';

export interface Flight {
  elapsedTime: number;
  stopsNum: number;
  flightAirline: Airline;
  flighDTO: FlightDTO[];
}
