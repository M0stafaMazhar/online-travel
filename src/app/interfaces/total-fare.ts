export interface TotalFare {
  amount: number;
  fareAmount: number;
  promoCode: string | null;
  promoDiscount: number;
  currencyCode: string;
  totalTaxes: number;
}
