import { Airline } from './airline';
import { Airpor } from './airpor';
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
  departureTerminalAirport: Airpor;
  arrivalTerminalAirport: Airpor;
  transitTime: string;
  flightInfo: FlightInfo;
  segmentDetails: SegmentDetails;
  supplierRefID: string | null;
}
