import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../onboarding.service';
import {Location } from '@angular/common'
import { AdultsService } from 'src/app/adults/adults.service';


@Component({
  selector: 'app-subscription-s01-v04',
  templateUrl: './subscription-s01-v04.page.html',
  styleUrls: ['./subscription-s01-v04.page.scss'],
})
export class SubscriptionS01V04Page implements OnInit {
  @ViewChild('closemodal') closemodal:ElementRef;

  selectedCountryId:any
  selectedCountry:any
  selectedBracket:any
  selectedPlan:any
  cartList:any
  //userId=sessionStorage.getItem("userId")
  userId:any
  cartId:any
  learnermail:any = ''
  learnermsg:any = ''
  activationCode:any = ''
  planWarning=false

  cartProductionList:any
  isModalPopup=false;
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  countryList=[]
  totalCartValue:any
  totalItemCount=0
  showCart=false
  enablepopup=false
  enableadd=false
  enableemail=false
  enableActivate=false
  selectedSubscription="Annual"
  defaultCountry:any
  defaultCurrency:any
  defaultCurrencySymbol:any
  myself: any = 0;
  countryCode: any = '';
  enableLoginSubscriber = false;
  isSubscribe = false
  enableMySelf = false
  typeList = ['Annual', 'Monthly']
  enableGift = false;
  enableData = false;
  cartitemList = [];
  modaldata = {}
  firstpage = true;
  secondpage = false;
  thirdpage = false;
  fourthpage = false;
  yearormonth = ''
  isActivateModal=false;
  constructor(private router: Router,private service:OnboardingService, private services:AdultsService, private location:Location, private cd: ChangeDetectorRef) {
    let res = localStorage.getItem("isloggedin")
    if(res !== 'T') this.router.navigate(['/onboarding/login'])
    if(localStorage.getItem('subscribepage') === 'T') {
      this.router.navigate(['/onboarding/login'])
    }
    if(localStorage.getItem("email") === 'guest@humanwisdom.me') {
      this.enableLoginSubscriber = true;
    }else {
      this.enableLoginSubscriber = false;
      localStorage.setItem("activeCode", 'F')
    }
    let namedata = localStorage.getItem('name').split(' ')
    this.modaldata['email'] = localStorage.getItem('email');
    this.modaldata['firstname'] = namedata[0];
    this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
    if( this.service.isActivationFlow){
      setTimeout(() => {
        this.ActivationFlow();
      }, 300);
    }
   }

  ngOnInit() {
    if(localStorage.getItem('giftwisdom') === 'F')   {
      this.enableGift = true;
    } 
    let popup = JSON.parse(localStorage.getItem("Subscriber"))
    if(popup === 1) this.enablepopup = true
    this.isSubscribe = popup === 0 ? false : true;
    console.log("save username",this.saveUsername)
    if(this.saveUsername==false)
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    else
      this.userId=JSON.parse(localStorage.getItem("userId"))
    console.log("userID",this.userId)
    this.getCountry();
    this.viewCart();
   
setTimeout(() => {
  console.log(this.cartList)
  // this.cartList[0].qty = this.cartitemList.length
  // if(this.cartitemList.length === 0){
  //   this.cartList[0].price =  this.cartList[0]['Annual']
  // }else {
  //   this.cartList[0].price = this.cartitemList[0].Amt
  //   this.cartList[0].selectedSubscription = this.cartitemList[0].Plan
  // }
  // this.enableData = true
  // this.cd.detectChanges()

}, 7000)
    
  }

  viewCart() {
    this.service.viewCart({ "Id":this.userId})
    .subscribe(res=>
      {
        
        if(res && res.length !== 0) {
          this.cartitemList = res;
          if(res[0]['Plan'] === 'Annual') this.typeList.splice(1, 1);
          else this.typeList.splice(0, 1);
          if(res.some((d) => d['MySelf'] === "True")) {
            this.enableMySelf = false
          }else {
            if(localStorage.getItem('giftwisdom') === 'F')   {
              this.myself = 1
              this.enableMySelf = true
            } 
          }
        }else {
          if(localStorage.getItem('giftwisdom') === 'F')   {
            this.myself = 1
            this.enableMySelf = true
          } 
        }

      },
      error=>{
        console.log(error)
      })
  }

  getActivationCode(){
    localStorage.setItem("activeCode", 'T')
    this.router.navigate(['/onboarding/login'])
  }

 
 proceedcart() {
   this.router.navigate(['/onboarding/viewcart'])
 }

 already(value) {
  this.closemodal.nativeElement.click()
  if(value === 'home') {
    this.router.navigate(['/adults/adult-dashboard'])
  }else {
    this.router.navigate(['/onboarding/login'])
  }
}

uselater() {
  setTimeout(() => {
    this.activationCode = ''
    this.enableActivate = false;
  }, 1000);
}

getcode(value) {
  this.activationCode = value;
}

enablelastpage() {
  this.fourthpage = true;
}

verifyactkey() {
  console.log("Submit verify")
  this.services.verifyactkey(this.activationCode)
  .subscribe(
    res=>
    {
      if(res) {
       this.yearormonth = res
      this.thirdpage = false
        this.firstpage = false
        this.secondpage = true;
      }else {
        this.secondpage = false;
        this.thirdpage = true
      }
      // this.enableActivate = true;
      // this.closemodal.nativeElement.click()
      
      // this.router.navigate(['/adults/adult-dashboard'])
    },
    error=>{
      console.log(error);
     
      // window.alert(error.error['Message'])
    },
   
    ()=>{
      

    }
  )
}
Confirm(){
  this.submitcode();
}


submitcode(){
  this.service.verifyActivationKey(this.activationCode,this.userId, this.countryCode)
  .subscribe(
    res=>
    {
      if(res) {
        let code: any = 1
      localStorage.setItem('Subscriber', code)
      this.thirdpage = false
      this.firstpage = false
      this.secondpage = false;
      this.fourthpage = true;
      if(this.yearormonth=='Year' && this.service.isActivationFlow){
        this.router.navigate(['/adults/hwp-premium-congratulations']);
      }
      }else {
        this.secondpage = false;
        this.thirdpage = true
      }
      // this.enableActivate = true;
      // this.closemodal.nativeElement.click()
      
      // this.router.navigate(['/adults/adult-dashboard'])
    },
    error=>{
      this.secondpage = false;
        this.thirdpage = true
      // window.alert(error.error['Message'])
    },
   
    ()=>{
      

    }
  )

}

  radioevent(event) {
    if(event.target.checked) {
      this.myself = 1;
      this.enableemail = false;
    }else {
      this.myself = 0;
    }
  }

  laterradioevent(event) {
    if(event.target.checked) {
      this.myself = 0;
      this.enableemail = false;
    }
  }
  
  someoneradioevent(event) {
    if(event.target.checked) {
      this.myself = 0;
      this.enableemail = true;
    }
  }

  emailinput(event) {
    this.learnermail = event.target.value;
  }

  msginput(event) {
    this.learnermsg = event.target.value;
  }

  getCountry(){
    this.service.getCountry().subscribe((res:any)=>{  
      
      if(res['in_eu']) {
        this.countryCode = 'EUR'
      }else {
        this.countryCode = res['country_code_iso3']
      }
      this.getPricing()
      this.defaultCountry=res.country_name
    },

      error=>{
        console.log(error)
      },
      ()=>{
      });  

  }

  getCurrencies(){
    console.log("my country", this.defaultCountry)
    this.service.getCurrencies().subscribe(res=>
      {
        
        this.countryList=res.filter((item, i, arr) => arr.findIndex((t) => t.CountryId=== item.CountryId) === i);
        console.log(this.countryList)
       let found=this.countryList.find(o=>o.Country==this.defaultCountry)
       if(found){
         console.log("found")
         this.defaultCurrency=found.Currency
         this.defaultCurrencySymbol=found.CurSymbol
         this.selectedCountryId=found.CountryId
         this.getPricing()
       }
       else{
         console.log("not found")
       }
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
      {
        this.cartList[i].selectedSubscription=plan
        if(plan=="Annual")
          this.cartList[i].price= this.cartList[i].Annual
        else
          this.cartList[i].price= this.cartList[i].Monthly
        

      }
         
      
    }
    console.log(this.cartList)
  }
  
  

  getPricing(){
    this.service.getPricing(this.countryCode).subscribe(res=>
      {
        console.log(res,"product list from api")
        this.cartList=res.filter((d) => d['Program'] === "Adults");
        this.cartList.forEach(function (element) {
          element.Monthly=parseInt(element.Monthly)
          element.Annual=parseInt(element.Annual)
          element.qty = 0;
          element.selectedSubscription="null"
          element.price=0
          element.planId=0
          element.cartId=0
          element.later=0
        });
        this.defaultCurrencySymbol=res[0]['ISOCode'];
        this.getAmount();
      }, (err) => {
        window.alert(err.error['Message'])
      }
    )
  }  

  addToCart(){
    this.loggedUser()
    let pid = this.cartList[0]['ProgID']
    console.log(pid)
   
    
    for(var i=0;i<this.cartList.length;i++){
      

     

      if(this.cartList[i].ProgID === pid)
      {  
        this.checkPopup(this.cartList[i])
          this.showCart=true
          this.planWarning=false
          this.totalItemCount+=1
          this.cartList[i].qty +=1;
          if(this.cartList[i].selectedSubscription=="Monthly")
          {
            this.cartList[i].selectedSubscription="Monthly"
            this.cartList[i].price=this.cartList[i].Monthly * this.cartList[i].qty
            this.cartList[i].planId=1
          }
          else{
            this.cartList[i].selectedSubscription="Annual"
            this.cartList[i].price=this.cartList[i].Annual* this.cartList[i].qty
            this.cartList[i].planId=2
  
          }
          //call service
         
            this.service.addItem({
              "UserId":this.userId,
              "RateId":this.cartList[i].RateID,
              "Qty":this.cartList[i].qty,
              "PlanId":this.cartList[i].planId,
              "MySelf": this.myself,
              "LearnerEmail": this.learnermail,
              "LearnerMsg": this.learnermsg,
              })
              .subscribe(res=>{
                console.log(res,"cartId")
                this.cartId=res
                for(var i=0;i<this.cartList.length;i++){
                  if(this.cartList[i].ProgID === pid){
                    this.cartList[i].cartId=res
                  }
                  
                }
                if(this.enableMySelf) this.enableMySelf = false;
                this.enableadd = true; 
                this.myself = 0,
                this.learnermail = '',
                this.learnermsg = '',
                this.enableemail = false
                this.cd.detectChanges()
                this.viewCart()
              },
              error=>{
                console.log(error)
              },
              ()=>{
                console.log(this.cartList[i])
                console.log(this.cartList,"afteraddidtion")
                this.totalPrice()  
              })
            
             
  
          
  
         /* else{
            this.cartList[i].cartId=this.cartId
            this.service.editCart(
              {"Id":parseInt(this.cartId)},
              {"Id":parseInt(this.cartList[i].qty)}
              )
              .subscribe(res=>
                {
                  
            })
          }*/
        
       
       
          
          
      } 
            
    }
    
    


  }
  checkPopup(item){
    console.log(item)
    if(item.later==1)
      console.log("do not show popup")
    else{
      console.log("show")
      
    }


  }

  removeFromCart(cid,pid){
   
    
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
          if(this.cartList[i].selectedSubscription=="Monthly")
          {
            this.cartList[i].selectedSubscription="Monthly"
            this.cartList[i].price=parseInt(this.cartList[i].Monthly) * parseInt(this.cartList[i].qty)
            this.cartList[i].planId=1
          }
          else{
            this.cartList[i].selectedSubscription="Annual"
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

  

  totalPrice(){
    //this.selectedSubscription="annual"
    this.totalCartValue = 0;
    for(var i=0;i<this.cartList.length;i++){
      this.totalCartValue += (this.cartList[i].price);
    }
    console.log(this.totalCartValue,this.totalItemCount)
  }

  getAmount(){
    this.cartList[0].qty = this.cartitemList.length
    if(this.cartitemList.length === 0){
      this.cartList[0].price =  this.cartList[0]['Annual']
    }else {
      this.cartList[0].price = this.cartitemList[0].Amt
      this.cartList[0].selectedSubscription = this.cartitemList[0].Plan
    }
    this.enableData = true;
    this.cd.detectChanges();
  }

  ngOnDestroy(){
    sessionStorage.setItem("cartList",JSON.stringify(this.cartList))
    if(localStorage.getItem('giftwisdom') === 'T')   {
      localStorage.setItem('giftwisdom', 'F')
    } 
  //   totalCartValue:any
  // totalItemCount=0
  }
  ActivationFlow(){
    if(this.isActivateModal){
      this.isActivateModal=false;
    }else{
      this.isActivateModal=true;
    }

  }
  Cancel(){
    localStorage.setItem('isMonthlySelectedForPayment','F');
    this.isModalPopup=false;
  }

}
