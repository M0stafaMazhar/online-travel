export interface Flight {
  arrivingTo: string;
  departingFrom: string;
  departingOnDate: string;
}

export interface SearchCriteria {
  adultNum: number;
  childAges: number;
  childNum: number;
  currency: string;
  device: string;
  flightType: string;
  infantAges: number;
  infantNum: number;
  language: string;
  pos: string;
  preferredAirline: string | null;
  selectDirectFlightsOnly: boolean;
  selectedFlightClass: string;
  source: string;
  totalPassengersNum: number;
  flights: Flight[];
}
