import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {OnboardingService} from '../onboarding.service'
import { AdultsModule } from 'src/app/adults/adults.module';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.page.html',
  styleUrls: ['./addcart.page.scss'],
})
export class AddcartPage implements OnInit,OnDestroy {
  selectedCountryId:any
  selectedCountry:any
  selectedBracket:any
  selectedPlan:any
  cartList:any
  //userId=sessionStorage.getItem("userId")
  userId:any
  cartId:any
  planWarning=false

  cartProductionList:any
  
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  countryList=[]
  totalCartValue:any
  totalItemCount=0
  showCart=false
  selectedSubscription="annual"


  

  constructor(private router: Router,private service:OnboardingService, private location:Location) { }

  ngOnInit() {
    console.log("save username",this.saveUsername)
    if(this.saveUsername==false)
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    else
      this.userId=JSON.parse(localStorage.getItem("userId"))
    console.log("userID",this.userId)
    this.getCurrencies()
  }

  getCurrencies(){
    this.service.getCurrencies().subscribe(res=>
      {
        
        this.countryList=res.filter((item, i, arr) => arr.findIndex((t) => t.CountryId=== item.CountryId) === i);
        console.log(this.countryList)
      }
    )
  }

  selectCountry(countryId){
    // console.log(country)
    // this.selectedCountryId=this.countryList.filter(r=>{return r.Country==country})[0].CID
    this.selectedCountryId=countryId
    console.log(this.selectedCountryId)
    
    this.getPricing()
  }

 /* selectPriceBracket(p){
    console.log(p)
    this.selectedBracket=p
    if(this.selectedBracket=="monthly")
    {
      this.cartProdutionList=this.productList.map(({ProgID,Program,CountryID,Monthly})=>({ProgID,Program,CountryID,Monthly}))
      this.cartList = this.cartList.map(elm => ({ProgID: elm.ProgID,
        Program:elm.Program, 
        CountryID:elm.CountryID,
        price: elm.Monthly,
        qty:0}));
      console.log(this.cartList)
    }
    else{
      this.cartList=this.productList.map(({ProgID,Program,CountryID,Annual})=>({ProgID,Program,CountryID,Annual}))
      this.cartList = this.cartList.map(elm => ({ProgID: elm.ProgID,
        Program:elm.Program, 
        CountryID:elm.CountryID,
        price: elm.Annual,
      qty:0}));
      console.log(this.cartList)
    }
    



  }*/
  loggedUser(){
    if(!this.userId)
    {
      console.log("login first")
      this.router.navigate(['/onboarding/login'])

    }
     
    

  }
  
  selectPlan(plan,id){
    this.loggedUser()
    this.planWarning=false
    console.log(plan,id)
    for(var i=0;i<this.cartList.length;i++){
      if(this.cartList[i].ProgID === id)
          this.cartList[i].selectedSubscription=plan
    }
  }
  
  

  getPricing(){
    this.service.getPricing({ "Id":parseInt(this.selectedCountryId)}).subscribe(res=>
      {
        console.log(res,"product list from api")
        this.cartList=res;
        this.cartList.forEach(function (element) {
          element.Monthly=parseInt(element.Monthly)
          element.Annual=parseInt(element.Annual)
          element.qty = 0;
          element.selectedSubscription="null"
          element.price=0
          element.planId=0
        });
      
      }
    )
  }  

  addToCart(pid){
    this.loggedUser()
    
    console.log(pid)
   
    
    for(var i=0;i<this.cartList.length;i++){
      

     

      if(this.cartList[i].ProgID === pid)
      {  
        if(this.cartList[i].selectedSubscription=="null")
         this.planWarning=true
        else
        { this.showCart=true
          this.planWarning=false
          this.totalItemCount+=1
          this.cartList[i].qty += 1;
          if(this.cartList[i].selectedSubscription=="monthly")
          {
            this.cartList[i].selectedSubscription="monthly"
            this.cartList[i].price=this.cartList[i].Monthly * this.cartList[i].qty
            this.cartList[i].planId=1
          }
          else{
            this.cartList[i].selectedSubscription="annual"
            this.cartList[i].price=this.cartList[i].Annual* this.cartList[i].qty
            this.cartList[i].planId=2
  
          }
          //call service
          if(this.cartList[i].qty==1)
          {
            this.service.addItem({
              "UserId":this.userId,
              "RateId":this.cartList[i].RateID,
              "Qty":this.cartList[i].qty,
              "PlanId":this.cartList[i].planId
  
              })
              .subscribe(res=>{
                console.log(res,"cartId")
                this.cartId=res
              })
  
          }
  
          else{
            this.cartList[i].cartId=this.cartId
            this.service.editCart(
              {"Id":parseInt(this.cartId)},
              {"Id":parseInt(this.cartList[i].qty)}
              )
              .subscribe(res=>
                {
                  
            })
          }
        }
       
       
          
          
      } 
            
    }
    console.log(this.cartList,"afteraddidtion")
    this.totalPrice()  
    


  }

  removeFromCart(pid){
   
    
    if(this.totalItemCount!=0)
      this.totalItemCount-=1
    if(this.totalItemCount==0)
      this.showCart=false
   
    console.log(pid)
    for(var i=0;i<this.cartList.length;i++){
      /*if(this.cartList[i].qty=1)
      {
        this.showCart=false
      }*/
      if(this.cartList[i].ProgID === pid)
      {  
        if(this.cartList[i].qty==1)
         { console.log("delete from d/b and add DeleteCart service")
          this.service.deleteItem({"Id":parseInt(this.cartList[i].cartId)})
          .subscribe((res) => {});
        }
        
        if(this.cartList[i].qty==0)
          console.log("cannot remove")
        else
        {
          this.cartList[i].qty -= 1;
          if(this.cartList[i].selectedSubscription=="monthly")
          {
            this.cartList[i].selectedSubscription="monthly"
            this.cartList[i].price=parseInt(this.cartList[i].Monthly) * parseInt(this.cartList[i].qty)
            this.cartList[i].planId=1
          }
          else{
            this.cartList[i].selectedSubscription="annual"
            this.cartList[i].price=this.cartList[i].Annual * this.cartList[i].qty
            this.cartList[i].planId=2
  
          }

        }
        //call service
        if(this.cartList[i].qty!=0){

          /*this.service.addItem({
            "UserId":this.userId,
            "RateId":this.cartList[i].RateID,
            "Qty":this.cartList[i].qty,
            "PlanId":this.cartList[i].planId

            })
            .subscribe(res=>{
              
            })*/

           
            this.service.editCart(
              {"Id":parseInt(this.cartList[i].cartId)},
              {"Id":parseInt(this.cartList[i].qty)}
              )
              .subscribe(res=>
                {
                  
            })

        }
      } 
            
    }
    console.log(this.cartList,"afterRemoval")
    this.totalPrice()  
  }

  /*addItem(pid){
    this.showCart=true
    this.totalItemCount+=1
    console.log(pid)
    //console.log(pid);
    for(var i=0;i<this.cartProductionList.length;i++){

     

      if(this.cartProductionList[i].ProgID === pid)
      {  
        this.cartProductionList[i].qty += 1;
      } 
      // if(this.cartList[i].qty>0)
      // {
      //   this.totalItemCount += this.cartList[i].qty

      // }          
    }
   
    console.log(this.cartProductionList);
    this.totalPrice()
    
  }

  removeItem(pid){
    if(this.totalItemCount!=0)
      this.totalItemCount-=1
    console.log(pid)
   
    for(var i=0;i<this.cartList.length;i++){
      if(this.cartProductionList[i].qty=1)
      {
        this.showCart=false
      }
      if(this.cartProductionList[i].ProgID === pid)
      {  
        if(this.cartProductionList[i].qty==0)
        {
          console.log("cannot remove")

        }
         
        else
          this.cartProductionList[i].qty -= 1;
      }           
    }
   
    console.log(this.cartProductionList);
    this.totalPrice()
    
  }*/

  totalPrice(){
    //this.selectedSubscription="annual"
    this.totalCartValue = 0;
    for(var i=0;i<this.cartList.length;i++){
      this.totalCartValue += (this.cartList[i].price);
     
    }
    console.log(this.totalCartValue,this.totalItemCount)
  }

  ngOnDestroy(){
    sessionStorage.setItem("cartList",JSON.stringify(this.cartList))
  //   totalCartValue:any
  // totalItemCount=0
  }

  

}
