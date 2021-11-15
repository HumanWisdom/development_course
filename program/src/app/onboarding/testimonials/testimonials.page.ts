import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validators, AbstractControl} from '@angular/forms'
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {OnboardingService} from '../onboarding.service'


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage implements OnInit {
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  userId:any
  testimonialList=[]

  constructor(private router: Router,private service:OnboardingService, private location:Location) { }

  ngOnInit() {
    this.getTestimonials()
  
  }
  getTestimonials(){
    
  this.service.getTestimonials().subscribe(res=>
    {
      console.log(res)
      this.testimonialList=res
     
      
    }
  )
  }

}
