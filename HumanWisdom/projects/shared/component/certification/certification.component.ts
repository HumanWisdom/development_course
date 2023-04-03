import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
})

export class CertificationComponent implements OnInit {
  @Input() moduleName: string;
  module:any
  public userName=localStorage.getItem('name');
  constructor(private router: Router
  ) {
 
   }

  ngOnInit() {

  }
}
