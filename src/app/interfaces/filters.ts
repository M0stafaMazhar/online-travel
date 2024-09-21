export interface Filters {
  airportQuery: string;
  refundable: boolean;
  stops: {
    direct: boolean;
    one: boolean;
    more: boolean;
  };
}
