import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sessionover-s1',
  templateUrl: './sessionover-s1.component.html',
  styleUrls: ['./sessionover-s1.component.scss'],
})
export class SessionoverS1Component implements OnInit {
  @Input() bg: string;
  @Input() points: string;
  @Input() progress: string;
 


  constructor() { }

  ngOnInit() {}

}
