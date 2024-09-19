export interface Penalty {
  price: number;
  curency: string;
  percentage: number;
}

export interface FareDTO {
  fareAmount: number;
  fareType: string;
  currencyCode: string;
}

export interface Tax {
  taxCode: string;
  amount: number;
  taxName: string;
  taxCurrencyCode: string;
  content: string;
  countryCode: string;
}

export interface FareBreakdown {
  key: string;
  pricingMethod: string;
  cancelPenaltyDTOs: Penalty[];
  changePenaltyDTOs: Penalty[];
  passengerQuantity: number;
  passengerType: string;
  passengersRef: string[];
  flightFaresDTOs: FareDTO[];
  taxes: Tax[];
}
