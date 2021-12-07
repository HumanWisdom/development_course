import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {OnboardingService} from '../onboarding.service'

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.page.html',
  styleUrls: ['./viewcart.page.scss'],
})
export class ViewcartPage implements OnInit {
  cartList:any
  countryList=[]
  totalCartValue:any
  totalItemCount=0
  userId:any
  symbol:any
  couponCode:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  discount=0
  showCouponWarning=false
  enableiframe=false
  keyList:any
  arrayFiltered=[]
  totalCartValueDiscount:any
  myself: number = 0;
  learnermail: any = '';
  userEmail: any = '';
  learnermsg: any = '';
  msg: any = '';
  activeId: any = 0;
  stripeId: any = 0;
  activeCard: any;
  enableMySelf = false
  enableemail=false
  enableDecide = false
  enableedit = false;


  constructor(private router: Router,private service:OnboardingService, private location:Location) { 
    let res = localStorage.getItem("isloggedin")
    if(res !== 'T') this.router.navigate(['/onboarding/login'])
  }

  ngOnInit() {
    this.userEmail=JSON.parse(localStorage.getItem("userEmail"))
    localStorage.setItem("couponid", '0')
    console.log("save username",this.saveUsername)
    if(this.saveUsername==false)
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    else
      this.userId=JSON.parse(localStorage.getItem("userId"))
    this.viewCart()
     
    //console.log(this.cartList)
  }
 /* getMax(){
    this.cartList.forEach(obj => {
      const item = this.arrayFiltered.find(thisItem => thisItem.RateId === obj.RateId);
      if (item) {
          if (item.Qty < obj.Qty) {
              item.Qty = obj.Qty;
          }
          
          return;
      }
      
      this.arrayFiltered.push(obj);
  });
  this.cartList=this.arrayFiltered
  console.log(this.cartList)
  }*/


  viewCart() {
    this.service.viewCart({ "Id":this.userId})
    .subscribe(res=>
      {
        console.log(res)
        this.cartList=res
        this.symbol=this.cartList[0].Symbol
        
        for(var i=0;i<this.cartList.length;i++){
          this.cartList[i].Qty=parseFloat(this.cartList[i].Qty)
          this.cartList[i].Amt=parseFloat(this.cartList[i].Amt)
          this.cartList[i].RateId=parseFloat(this.cartList[i].RateId)
          this.cartList[i].price=parseFloat(this.cartList[i].Qty)*parseFloat(this.cartList[i].Amt)

          this.cartList[i].ProgID = 9
        }
       // console.log(this.getMax(),"hey")
        

       

       
       if(res && res.length !== 0) {
        if(res.some((d) => d['MySelf'] === "True")) {
          this.enableMySelf = false
        }else {
          if(localStorage.getItem('giftwisdom') === 'F')   {
            this.myself = 1
            this.enableMySelf = true
          } 
        }
      }
        



      },
      error=>{
        console.log(error)
      },
      ()=>this.totalPrice())
    //console.log(this.cartList)
  }

  editCard(card) {
    this.enableedit = true;
    this.activeCard = card;
    this.activeId = card.CartId
    this.enableemail = true;
    this.myself = 0;
    this.enableMySelf = false;
    this.enableDecide = false;
    this.learnermail = card.LearnerEmail
    this.learnermsg = card.LearnerMsg
  }

  emailinput(event) {
    this.learnermail = event.target.value;
  }

  msginput(event) {
    this.learnermsg = event.target.value;
  }

  addToCart(){
    this.activeCard['LearnerEmail'] = this.learnermail
    this.activeCard['LearnerMsg'] = this.learnermsg
    this.activeCard['MySelf'] = this.myself
    let cartId = this.activeId;
    console.log(cartId)
    for(var i=0;i<this.cartList.length;i++){

      if(this.cartList[i].CartId==cartId)
      {

       // var oneItem=this.cartList[i].Amt/this.cartList[i].Qty
        this.cartList[i].Qty+=1
    
        this.cartList[i].price+=(this.cartList[i].Amt)
        
        //call service
        this.service.editactiveCart(
          this.activeCard
          )
          .subscribe(res=>
            {
              console.log(res)
        })
      }
    }
    console.log(this.cartList)
    this.totalPrice()

  }

  removeFromCart(cartId){
    console.log(cartId)
    for(var i=0;i<this.cartList.length;i++){
     
      if(this.cartList[i].CartId==cartId)
      {
        if(this.cartList[i].Qty==1)
        {
          this.cartList.splice(i,1)
          if(this.cartList.length === 0) this.router.navigate(['/onboarding/add-to-cart'])
          //call service to delete
          this.service.deleteItem({"Id":parseFloat(cartId)})
          .subscribe(res=> {
            console.log(res)
          })
        }
        else{
         // var oneItem=this.cartList[i].Amt/this.cartList[i].Qty
          this.cartList[i].Qty-=1
      
          this.cartList[i].Amt-=(this.cartList[i].Amt)
          //call service
          this.service.editCart(
            {"Id":parseFloat(cartId)},
            {"Id":parseFloat(this.cartList[i].Qty)}
            )
            .subscribe(res=>
              {
                console.log(res)
          })

        }
       
        
      }
    }
    console.log(this.cartList)
    this.totalPrice()

  }

 

  totalPrice(){
    this.totalCartValue = 0;
    
    for(var i=0;i<this.cartList.length;i++){
      this.totalCartValue += this.cartList[i].Amt;
     
    }
    console.log(this.totalCartValue)
    this.totalCartValueDiscount=this.totalCartValue
    localStorage.setItem('totalAmount', this.totalCartValue)
  }

  couponValidation(){
    this.service.couponValidation({
      "CouponCode":this.couponCode,
      "CartAmt":this.totalCartValue
    }).subscribe(
      res=>
      {console.log(res)
        if(res.length !== 0)
        {
          this.msg = 'Coupon applied successfully'
          this.discount=parseFloat(res[0].Discount)
          localStorage.setItem("couponid", res[0]['CouponID'])
          this.totalCartValueDiscount=this.totalCartValue-this.discount
          localStorage.setItem('totalAmount', this.totalCartValueDiscount)
        }
          
        else {
          this.msg = 'Please enter a valid coupon code. '
        }

        setTimeout(() => {
          this.msg = ''
        }, 3000)
      }
    )
  }

  getKey(){
    this.router.navigate(['/onboarding/payment'], { state: { quan:  this.cartList.length.toString(), plan: this.cartList[0]['Plan']}})
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


  addtoCart(){
    let pid = this.cartList[0]['ProgID']
    console.log(pid)
   
    
      

    if(this.cartList[0].Plan=="Monthly")
    {
      this.cartList[0].planId=1
    }
    else{
      this.cartList[0].planId=2

    }

    
          this.totalItemCount+=1
         
          //call service
         
            this.service.addItem({
              "UserId":this.userId,
              "RateId":this.cartList[0].RateId,
              "Qty":this.cartList.length + 1,
              "PlanId":this.cartList[0].planId,
              "MySelf": this.myself,
              "LearnerEmail": this.learnermail,
              "LearnerMsg": this.learnermsg,
              })
              .subscribe(res=>{
                console.log(res,"cartId")
                for(var i=0;i<this.cartList.length;i++){
                  if(this.cartList[i].ProgID === pid){
                    this.cartList[i].cartId=res
                  }
                  
                }
                if(this.enableMySelf) this.enableMySelf = false;
                this.myself = 0,
                this.learnermail = '',
                this.learnermsg = '',
                this.enableemail = false
                // this.cd.detectChanges()
                this.viewCart()
              },
              error=>{
                console.log(error)
              },
              ()=>{
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
                  console.log(res)
            })
          }*/
        
       
       
          
          
      
            
  
    
    


  }

  getAddCartEvent() {
    this.enableedit = false
    this.enableMySelf = true;
    this.enableDecide = true;
    this.enableemail = false;
    this.learnermail = ''
    this.learnermsg = ''
  }

}
