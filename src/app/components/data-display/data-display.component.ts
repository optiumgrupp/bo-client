import { Component, Input } from '@angular/core';

@Component({
  selector: 'bo-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent {
  @Input() public label: string;
  @Input() public value: string | number;
}
