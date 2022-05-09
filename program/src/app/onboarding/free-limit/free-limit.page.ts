import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-free-limit',
  templateUrl: './free-limit.page.html',
  styleUrls: ['./free-limit.page.scss'],
})
export class FreeLimitPage implements OnInit, AfterViewInit {
  @ViewChild('free_limt') enableotpmodal:ElementRef;
  @ViewChild('closemodal') closemodal:ElementRef;

  constructor( private location:Location, private router: Router ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.enableotpmodal.nativeElement.click()    
  }

  backClick(){
   this.location.back()
  }

  loginpage() {
    this.closemodal.nativeElement.click()
    this.router.navigate(['/onboarding/login'])
  }

}
