import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  programList=JSON.parse(localStorage.getItem("programList"))
  rateList=[]
  pricingList=[]
  countryList=[]
  selectedProgramID:any
  selectedProgram:any 
  selectedCountryID:any

  selectedCountry:any
  annualPrice:any
  monthlyPrice:any
  updatedMonthlyPrice:any
  updatedAnnualPrice:any

  searchedProgram:any
  searchedCountry:any
  searchedAPrice:any
  searchedMPrice:any


  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    //this.getRates()
    this.getCountries()
  }
  
  selectProgram(event){
    
    console.log(event)
    this.selectedProgramID=event
    this.programList.find(element=>{
      if(element.ID==event)
      {
       this.selectedProgram=element.Program
      }
    })
    console.log("selected Program",this.selectedProgramID,this.selectedProgram)
  
    
  }

  selectCountry(event){
    console.log(event)
    this.selectedCountryID=event

  }

  addRate(){
    this.service.addRate({ "RateID":0,
    "ProgID":this.selectedProgramID,
    "CountryID":this.selectedCountryID,
    "Mly":this.monthlyPrice,
    "Yly":this.annualPrice,
    "Current":1})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getRates()
      }
    )

  }

  reset(){
    this.selectedCountryID=""
    this.selectedProgramID=""
    this.monthlyPrice=""
    this.annualPrice=""
  }

  getRates(){
    this.service.getRates().subscribe(res=>
      {
        console.log(res)
        this.rateList=res;
       
        console.log("rate list",this.rateList)
        this.pricingList=this.rateList.map(rate=>({...rate, ...this.programList.find(program=> program.ID==rate.ProgID)}))
       // this.pricingList=this.countryList.map(country=>({...country, ...this.pricingList.find(p=> p.CountryID==country.CountryID)}))
        this.pricingList=this.pricingList.map(p=>({...p, ...this.countryList.find(c=> c.CID==p.CountryID)}))

        console.log("pricing List",this.pricingList)
        
       
      
      }
    )

  }

  deleteRate(id){
    console.log(id)
    this.service.deleteRate({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getRates()
      }
    )

  }

  updateRate(programId,rateId,country){
    this.service.addRate({ "RateID":rateId,
    "ProgID":programId,
    "CountryID":country,
    "Mly":this.updatedMonthlyPrice,
    "Yly":this.updatedAnnualPrice,
    "Current":1})
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getRates()
      }
    )

  }

  getCountries(){
    this.service.getCountries().subscribe(res=>
      {
        console.log(res)
        this.countryList=res
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getRates()
      })

  }

  searchAPrice(){
    if(this.searchedAPrice=="")
    this.getRates()
  else{
    this.pricingList=this.pricingList.filter(res=>{
      return res.Annual.toLocaleLowerCase().match(this.searchedAPrice.toLocaleLowerCase())
      
    })
  }
    

  }

  searchMPrice(){
    if(this.searchedMPrice=="")
    this.getRates()
  else{
    this.pricingList=this.pricingList.filter(res=>{
      return res.Monthly.toLocaleLowerCase().match(this.searchedMPrice.toLocaleLowerCase())
      
    })
  }

  }

  searchCountry(){
    if(this.searchedCountry=="")
    this.getRates()
  else{
    this.pricingList=this.pricingList.filter(res=>{
      return res.Country.toLocaleLowerCase().match(this.searchedCountry.toLocaleLowerCase())
    })
  }

  }
  searchProgram(){
    if(this.searchedProgram=="")
    this.getRates()
  else{
    this.pricingList=this.pricingList.filter(res=>{
      return res.Program.toLocaleLowerCase().match(this.searchedProgram.toLocaleLowerCase())
    })
  }

  }

}
