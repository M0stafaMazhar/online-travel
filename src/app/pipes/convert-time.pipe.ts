import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime',
})
export class ConvrtTimePipe implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = value % 60;
    return `${hours}h ${minutes}m`;
  }
}
