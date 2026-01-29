import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Options} from '@angular-slider/ngx-slider'

@Component({
  selector: 'app-only-slider',
  templateUrl: './only-slider.component.html',
  styleUrls: ['./only-slider.component.scss'],
})
export class OnlySliderComponent {

  @Input() r:number
  @Input() pFilter:string
  @Input() nFilter:string
  @Output() sendRating = new EventEmitter<string>();
  rating=0
  options: Options={
    floor:0,
    ceil:5
  }
  value=100
  
  constructor() { }

  selectRating(r)
  {
    
    
    this.sendRating.emit(JSON.stringify({"Id":this.r,"Rating":this.rating}))

  }

}
