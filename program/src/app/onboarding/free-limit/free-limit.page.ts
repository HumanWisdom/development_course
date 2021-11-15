import { Component, OnInit } from '@angular/core';
import {Location } from '@angular/common'

@Component({
  selector: 'app-free-limit',
  templateUrl: './free-limit.page.html',
  styleUrls: ['./free-limit.page.scss'],
})
export class FreeLimitPage implements OnInit {

  constructor( private location:Location ) { }

  ngOnInit() {
  }

  backClick(){
   this.location.back()
  }

}
