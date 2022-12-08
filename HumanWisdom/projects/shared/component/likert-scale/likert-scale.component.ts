import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-likert-scale',
  templateUrl: './likert-scale.component.html',
  styleUrls: ['./likert-scale.component.scss'],
})
export class LikertScaleComponent implements OnInit {
  @Input() skipToPage:string

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    console.log("skiptopage",this.skipToPage)
  }
  goToPage(){
    console.log("in page")
    this.router.navigate(["/adults"+this.skipToPage])
  }

}
