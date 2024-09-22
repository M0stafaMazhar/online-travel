import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doted-line',
  templateUrl: './doted-line.component.html',
  styleUrls: ['./doted-line.component.scss'],
})
export class DotedLineComponent implements OnInit {
  @Input() numberOfDots = 0;

  dots: any[] = [];

  ngOnInit(): void {
    this.dots = new Array(this.numberOfDots).fill(0);
  }
}
