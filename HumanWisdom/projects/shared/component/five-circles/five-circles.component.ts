import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-five-circles',
  templateUrl: './five-circles.component.html',
  styleUrls: ['./five-circles.component.scss'],
})
export class FiveCirclesComponent implements OnInit {
  @Input() colours: any;
  @Input() text: any;
  c1:any
  c2:any
  c3:any
  c4:any
  c5:any
  t1:any
  t2:any
  t3:any
  t4:any
  t5:any


  constructor() { }

  ngOnInit() {
    console.log(this.colours)
    this.c1=this.colours[0]
    this.c2=this.colours[1]
    this.c3=this.colours[2]
    this.c4=this.colours[3]
    this.c5=this.colours[4]
    this.t1=this.text[0]
    this.t2=this.text[1]
    this.t3=this.text[2]
    this.t4=this.text[3]
    this.t5=this.text[4]
  }

}
