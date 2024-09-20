export interface Filters {
  // airport: string;
  refundable: boolean;
  stops: {
    direct: boolean;
    one: boolean;
    more: boolean;
  };
}
