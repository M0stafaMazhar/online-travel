import { BaggageInf } from './baggage-inf';
import { FareBreakdown } from './fare-breakdown';
import { Flight } from './flight';
import { TotalFare } from './total-fare';

export interface AirItinerary {
  allJourney: {
    flights: Flight[];
  };
  itinTotalFare: TotalFare;
  cabinClass: string;
  flightType: string;
  pKey: string;
  deptDate: string;
  arrivalDate: string;
  isRefundable: boolean;
  totalDuration: number;
  sequenceNum: number;
  baggageInformation: BaggageInf[];
  passengerFareBreakDownDTOs: FareBreakdown[];
}
