import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="show" [ngClass]="{'spinner-overlay': true, 'spinner-overlay--dark': dark}">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() show: boolean = false;
  @Input() dark: boolean = false;
}
