import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Options} from '@angular-slider/ngx-slider'

@Component({
  selector: 'app-progress-slider',
  templateUrl: './progress-slider.component.html',
  styleUrls: ['./progress-slider.component.scss'],
})
export class ProgressSliderComponent implements OnInit {
  @Input() q:string
  @Input() r:number
  @Input() pFilter:string
  @Input() nFilter:string
  @Output() sendRating = new EventEmitter<string>();
  rating=1
  options: Options={
    floor:1,
    ceil:5
  }
  value=100

  constructor() { }

  ngOnInit() {

  }

  selectRating(r)
  {


    this.sendRating.emit(JSON.stringify({"Id":this.r,"Rating":this.rating}))

  }

}
