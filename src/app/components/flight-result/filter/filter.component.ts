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
    stops: {
      direct: true,
      one: true,
      more: true,
    },
    refundable: true,
    airportQuery: '',
  };

  constructor(private flightService: FlightsDataService) {}

  onFilter() {
    this.flightService.filterSubject.next(this.filters);
    console.log(this.filters);
  }
}
