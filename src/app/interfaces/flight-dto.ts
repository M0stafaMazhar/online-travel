import { Airline } from './airline';
import { Airport } from './airport';
import { FlightInfo } from './flight-info';
import { SegmentDetails } from './segment-details';

export interface FlightDTO {
  departureOffset: number;
  arrivalOffset: number;
  durationPerLeg: number;
  isStopSegment: boolean;
  deptTime: string;
  landTime: string;
  departureDate: string;
  arrivalDate: string;
  flightAirline: Airline;
  operatedAirline: Airline;
  departureTerminalAirport: Airport;
  arrivalTerminalAirport: Airport;
  transitTime: string;
  flightInfo: FlightInfo;
  segmentDetails: SegmentDetails;
  supplierRefID: string | null;
}
