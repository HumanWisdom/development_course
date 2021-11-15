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


  constructor(private router: Router,private service:OnboardingService, private location:Location) { }

  ngOnInit() {
    this.userEmail=JSON.parse(localStorage.getItem("userEmail"))
    localStorage.setItem("couponid", '0')
    console.log("save username",this.saveUsername)
    if(this.saveUsername==false)
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    else
      this.userId=JSON.parse(localStorage.getItem("userId"))
   
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

          
        }
       // console.log(this.getMax(),"hey")
        

       

       
        
        



      },
      error=>{
        console.log(error)
      },
      ()=>this.totalPrice())
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


  radioevent(event) {
    if(event.target.checkd) {
      this.myself = 1;
    }else {
      this.myself = 0;
    }
  }

  editCard(card) {
    this.activeCard = card;
    this.activeId = card.CartId
    this.myself = card.MySelf
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
  

}
