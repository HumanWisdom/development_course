import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  newName:any
  newTestimonial:any
  newDesignation:any
  testimonialList:any
  updatedName:any
  updatedTestimonial:any
  updatedDesignation:any
 

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getTestimonial()
  }
  reset(){
    this.newName=""
    this.newDesignation=""
    this.newTestimonial=""
  }
  addTestimonial(){
    this.service.addTestimonial({ "TestimonialID":0,
    "Name":this.newName,
    "Designation":this.newDesignation,
    "Testimonial":this.newTestimonial})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getTestimonial()
      }
    )

  }
  updateTestimonial(id){
    this.service.addTestimonial({ "TestimonialID":id,
    "Name":this.updatedName,
    "Designation":this.updatedDesignation,
    "Testimonial":this.updatedTestimonial})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getTestimonial()
      }
    )
   

  }

  initUpdate(name,designation,testimonial){
    console.log(name,designation,testimonial)
    this.updatedName=name
    this.updatedDesignation=designation
    this.updatedTestimonial=testimonial

  }
  deleteTestimonial(id){
    console.log(id)
    this.service.deleteTestimonial({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getTestimonial()
      }
    )

  }
  getTestimonial(){
    this.service.getTestimonials().subscribe(res=>
      {
        console.log(res)
        this.testimonialList=res;
       
        //console.log(this.keyList,"key list")
        //this.keyList=this.keyList.map(key=>({...key, ...this.programList.find(program=> program.ID==key.ProgId)}))
      },
      error=>{
        console.log(error)
      },
      ()=>{
        
      }
    )
  }

}
