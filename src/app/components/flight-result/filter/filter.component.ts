import { Component } from '@angular/core';
import { Filters } from 'src/app/interfaces/filters';
import { FlightsDataService } from 'src/app/services/flights-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filters: Filters = {
    //initialize filters
    stops: {
      direct: false,
      one: false,
      more: false,
    },
    refundable: false,
    airportQuery: '',
  };

  constructor(private flightService: FlightsDataService) {}

  onFilter() {
    //call data filter function
    this.flightService.filterSubject.next(this.filters);
  }
}
