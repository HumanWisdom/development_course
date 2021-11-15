import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Options} from '@angular-slider/ngx-slider'


@Component({
  selector: 'app-progress-slider3',
  templateUrl: './progress-slider3.component.html',
  styleUrls: ['./progress-slider3.component.scss'],
})
export class ProgressSlider3Component implements OnInit {
  @Input() q:string
  @Input() r:number
  @Input() pFilter:string
  @Input() nFilter:string
  @Output() sendRating = new EventEmitter<string>();
  rating=0
  options: Options={
    floor:1,
    ceil:3
  }
  value=100

  constructor() { }

  ngOnInit() {}
  selectRating(r)
  {
    
    console.log(this.rating,this.r)
    this.sendRating.emit(JSON.stringify({"Id":this.r,"Rating":this.rating}))

  }

}
