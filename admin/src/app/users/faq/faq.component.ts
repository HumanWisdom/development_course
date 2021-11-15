import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
 
  siteSectionList=[]
  faqList=[]
  faqSectionList=[]
  selectedSectionID:any
  selectedSection:any
  question:any
  answer:any 
  updatedQuestion:any
  updatedAnswer:any
  searchedSection:any

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getSiteSections()
    
  }

  
  selectSection(eventS){
    console.log(eventS)
    this.selectedSectionID=eventS
    
  }
  getSiteSections(){
    this.service.getSiteSections().subscribe(res=>
      {
        console.log(res)
        this.siteSectionList=res;
       
        console.log("site section",this.siteSectionList)
      
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getFaqs()
      })

  }

  getFaqs(){
    this.service.getFaqs().subscribe(res=>
      {
        console.log(res)
        this.faqList=res;
       
        console.log("faq list",this.faqList)
        this.faqSectionList=this.faqList.map(faq=>({...faq, ...this.siteSectionList.find(element=> element.ID==faq.SiteSectID)}))
        console.log("faq section list",this.faqSectionList)
      
      })

  }
  reset(){
    this.question=""
    this.answer=""
    this.selectedSectionID=""
  }

  addFaq(){
    this.service.addFaq({ "FaqId":0,
    "SiteSectId":this.selectedSectionID,
    "Que":this.question,
    "Ans":this.answer})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getFaqs()
      }
    )

  }

  deleteFaq(id){
    console.log(id)
    this.service.deleteFaq({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getFaqs()
      }
    )

  }

  

  updateFaq(siteSectionId,FaqId){
    this.service.addFaq({ "FaqId":FaqId,
    "SiteSectId":siteSectionId,
    "Que":this.updatedQuestion,
    "Ans":this.updatedAnswer})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getFaqs()
      }
    )

  }
  searchSection(){
    if(this.searchedSection=="")
    this.getFaqs()
  else{
    this.faqSectionList=this.faqSectionList.filter(res=>{
      return res.SiteSection.toLocaleLowerCase().match(this.searchedSection.toLocaleLowerCase())
      
    })
  }

  }


}
