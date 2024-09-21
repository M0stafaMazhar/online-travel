import { Component, Input } from '@angular/core';
import { SearchCriteria } from 'src/app/interfaces/search-criteria';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss'],
})
export class SearchCriteriaComponent {
  @Input() searchCriteria: SearchCriteria;
}
