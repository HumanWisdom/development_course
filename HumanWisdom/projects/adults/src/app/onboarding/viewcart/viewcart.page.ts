import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { OnboardingService } from '../../../../../shared/services/onboarding.service'
import * as $ from 'jquery'
import { LogEventService } from "../../../../../shared/services/log-event.service";
import { ForumService } from '../../../../../shared/forum/forum.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.page.html',
  styleUrls: ['./viewcart.page.scss'],
})
export class ViewcartPage implements OnInit {
  cartList: any[] = [];
  countryList = []
  totalCartValue: any
  totalItemCount = 0
  userId: any
  symbol: any
  isModalPopup = false;
  isMonthlySelected = false;
  couponCode: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  discount = 0
  showCouponWarning = false
  enableiframe = false
  keyList: any
  arrayFiltered = []
  totalCartValueDiscount: any
  myself: number = 0;
  learnermail: any = '';
  userEmail: any = '';
  learnermsg: any = '';
  msg: any = '';
  activeId: any = 0;
  stripeId: any = 0;
  activeCard: any;
  enableMySelf = false
  enableemail = false
  enableDecide = false
  enableedit = false;
  isUpgradeToPremium = '';
  enableLoginSubscriber = false;
  enablepopup = false;
  isSubscribe = false;
  couponCodeApplied = false;
  percentage = 20.00;
  aaenableEmailbox = false
  aenableMonthEmailbox = false
  teenageraenableEmailbox = false
  teenagerenableMonthEmailbox = false
  totalCartAmount = 0;
  cartListResult = []

  constructor(
    private router: Router,
    private service: OnboardingService,
    private location: Location,
    public logeventservice: LogEventService,
    private forumservice: ForumService
  ) {
    let res = localStorage.getItem("isloggedin")
    if (res !== 'T') this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
    if (localStorage.getItem("email") === 'guest@humanwisdom.me') {
      this.enableLoginSubscriber = true;
    } else {
      this.enableLoginSubscriber = false;
      localStorage.setItem("activeCode", 'F')
    }
    let popup = JSON.parse(localStorage.getItem("Subscriber"))
    if (popup === 1) this.enablepopup = true
    this.isSubscribe = popup === 0 ? false : true;
  }

  ngOnInit() {

    this.isUpgradeToPremium = localStorage.getItem('upgradeToPremium');
    this.userEmail = JSON.parse(localStorage.getItem("userEmail"))
    localStorage.setItem("couponid", '0')
    console.log("save username", this.saveUsername)
    if (this.saveUsername == false)
      this.userId = JSON.parse(sessionStorage.getItem("userId"))
    else
      this.userId = JSON.parse(localStorage.getItem("userId"))
    if (localStorage.getItem('personalised') === 'T') {
      this.personalisedaddcart()
    }
    if (localStorage.getItem('upgradeToPremium') === 'T') {
      localStorage.setItem('ispartnershipClick', 'T');
      this.upgradeToPremium()
    }
    else {
      this.viewCart()
    }
    localStorage.setItem('personalised', 'F');
    localStorage.setItem('upgradeToPremium', 'F');

    console.log(this.cartList)
  }

  viewCart() {
    this.service.viewCart({ "Id": this.userId })
      .subscribe(res => {

        this.cartList = res

        let obj = [
          {
            "CartId": 698,
            "RateId": "2",
            "UserId": "107",
            "Program": "Adults",
            "Plan": "Annual",
            "Symbol": "₹",
            "Amt": "3600",
            "Qty": 0,
            "MySelf": "False",
            "LearnerEmail": [],
            "LearnerMsg": ""
          },
          {
            "CartId": 700,
            "RateId": "2",
            "UserId": "107",
            "Program": "Adults",
            "Plan": "Monthly",
            "Symbol": "₹",
            "Amt": "500",
            "Qty": 0,
            "MySelf": "False",
            "LearnerEmail":[],
            "LearnerMsg": ""
          },
          {
            "CartId": 709,
            "RateId": "6",
            "UserId": "107",
            "Program": "Teenagers",
            "Plan": "Annual",
            "Symbol": "₹",
            "Amt": "3600",
            "Qty": 0,
            "MySelf": "False",
            "LearnerEmail": [],
            "LearnerMsg": ""
          },
          {
            "CartId": 710,
            "RateId": "6",
            "UserId": "107",
            "Program": "Teenagers",
            "Plan": "Monthly",
            "Symbol": "₹",
            "Amt": "500",
            "Qty": 0,
            "MySelf": "False",
            "LearnerEmail": [],
            "LearnerMsg": ""
          }
        ]

        res.forEach((d) =>{
          if(d['Program'] === 'Adults') {
            if(d['Plan'] === 'Annual') {
              obj[0]['RateId'] = d['RateId']
              obj[0]['UserId'] = d['UserId']
              obj[0]['Plan'] = d['Plan']
              obj[0]['Symbol'] = d['Symbol']
              obj[0]['Amt'] = d['Amt']
              obj[0]['Program'] = d['Program']
              obj[0]['LearnerEmail'].push({'CartId': d['CartId'], 'LearnerEmail': d['LearnerEmail']})
              obj[0]['Qty'] += 1
            }else {
              obj[1]['RateId'] = d['RateId']
              obj[1]['UserId'] = d['UserId']
              obj[1]['Plan'] = d['Plan']
              obj[1]['Symbol'] = d['Symbol']
              obj[1]['Amt'] = d['Amt']
              obj[1]['Program'] = d['Program']
              obj[1]['LearnerEmail'].push({'CartId': d['CartId'], 'LearnerEmail': d['LearnerEmail']})
              obj[1]['Qty'] += 1
            }
          } else if(d['Program'] === 'Teenagers') {
            if(d['Plan'] === 'Annual'){
              obj[2]['RateId'] = d['RateId']
              obj[2]['UserId'] = d['UserId']
              obj[2]['Plan'] = d['Plan']
              obj[2]['Symbol'] = d['Symbol']
              obj[2]['Amt'] = d['Amt']
              obj[2]['Program'] = d['Program']
              obj[2]['LearnerEmail'].push({'CartId': d['CartId'], 'LearnerEmail': d['LearnerEmail']})
              obj[2]['Qty'] += 1
            }else {
              obj[3]['RateId'] = d['RateId']
              obj[3]['UserId'] = d['UserId']
              obj[3]['Plan'] = d['Plan']
              obj[3]['Symbol'] = d['Symbol']
              obj[3]['Amt'] = d['Amt']
              obj[3]['Program'] = d['Program']
              obj[3]['LearnerEmail'].push({'CartId': d['CartId'], 'LearnerEmail': d['LearnerEmail']})
              obj[3]['Qty'] += 1
            }
          }
        })

        this.cartListResult = obj

        if (this.cartList.length > 0) {
          this.symbol = this.cartList[0].Symbol;
          this.isMonthlySelected = this.cartList.filter(x => x.Plan == 'Annual').length == 0;
        }

        for (var i = 0; i < this.cartList.length; i++) {
          this.cartList[i].Qty = parseFloat(this.cartList[i].Qty)
          this.cartList[i].Amt = parseFloat(this.cartList[i].Amt)
          this.cartList[i].RateId = parseFloat(this.cartList[i].RateId)
          this.cartList[i].price = parseFloat(this.cartList[i].Qty) * parseFloat(this.cartList[i].Amt)

          this.cartList[i].ProgID = 9
        }

        if (res && res.length !== 0) {
          if (res.some((d) => d['MySelf'] === "True")) {
            this.enableMySelf = false
          } else {
            if (localStorage.getItem('giftwisdom') === 'F') {
              this.myself = 1
              this.enableMySelf = true
            }
          }
        }




      },
        error => {
          console.log(error)
        },
        () => this.totalPrice())

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
  // monthly 1
  // yearly 2
  personalisedaddcart() {
    let m = JSON.parse(localStorage.getItem('cartlist'));
    let ym = localStorage.getItem('personalised subscription');
    if (m != null && ym != null) {
      this.service.addItem({
        "UserId": this.userId,
        "RateId": m['RateID'],
        "Qty": 1,
        "PlanId": ym === 'Monthly' ? 1 : 2,
        "MySelf": 1,
        "LearnerEmail": '',
        "LearnerMsg": '',
      })
        .subscribe(res => {
          this.viewCart()
        },
          error => {
            console.log(error)
          },
          () => {
            this.totalPrice()
          })
    }
  }

  upgradeToPremium() {
    let m = JSON.parse(localStorage.getItem('cartlist'));
    let ym = localStorage.getItem('partnership-app');
    if (m != null && ym != null) {
      this.service.addItem({
        "UserId": this.userId,
        "RateId": m['RateID'],
        "Qty": 1,
        "PlanId": ym === 'Monthly' ? 1 : 2,
        "MySelf": 1,
        "LearnerEmail": '',
        "LearnerMsg": '',
      })
        .subscribe(res => {
          this.viewCart()
        },
          error => {
            console.log(error)
          },
          () => {
            this.totalPrice()
          })
    }
  }

  addToCart() {
    this.activeCard['LearnerEmail'] = this.learnermail
    this.activeCard['LearnerMsg'] = this.learnermsg
    this.activeCard['MySelf'] = this.myself
    let cartId = this.activeId;
    console.log(cartId)
    for (var i = 0; i < this.cartList.length; i++) {

      if (this.cartList[i].CartId == cartId) {

        // var oneItem=this.cartList[i].Amt/this.cartList[i].Qty
        this.cartList[i].Qty += 1

        this.cartList[i].price += (this.cartList[i].Amt)

        //call service
        this.service.editactiveCart(
          this.activeCard
        )
          .subscribe(res => {

          })
      }
    }
    console.log(this.cartList)
    this.totalPrice()

  }

  removeFromCart(cartId, program, plan) {
    console.log(cartId)
    for (var i = 0; i < this.cartList.length; i++) {

      if (this.cartList[i].CartId == cartId) {
        for (var j = 0; j < this.cartListResult.length; j++) {
          if(this.cartListResult[j]['Program'] === program && this.cartListResult[j]['Plan'] === plan) {
            for (var m = 0; m < this.cartListResult[j]['LearnerEmail'].length; m++) {
              if(this.cartListResult[j]['LearnerEmail'][m].CartId === cartId) {
                this.cartListResult[j]['LearnerEmail'].splice(m, 1)
                this.cartListResult[j]['Qty'] = this.cartListResult[j]['LearnerEmail'].length
              }
            }
          }
        }
        this.cartList[i].Qty == 1
        this.cartList.splice(i, 1)
        this.isMonthlySelected = this.cartList.filter(x => x.Plan == 'Annual').length == 0;
        //call service to delete
        this.service.deleteItem({ "Id": parseFloat(cartId) })
          .subscribe(res => {
            this.totalPrice();
            if (this.cartList.length === 0) this.router.navigate(['/onboarding/add-to-cart'])
          })
      }
    }
  }

  totalPrice() {
    this.totalCartValue = 0;

    for (var i = 0; i < this.cartList.length; i++) {
      this.totalCartValue += this.cartList[i].Amt;
    }
    console.log(this.cartList)
    this.totalCartAmount = this.totalCartValue;
    if(this.couponCodeApplied) {
      this.totalCartValueDiscount = this.totalCartValue - this.discount
    }else {
      this.totalCartValueDiscount = this.totalCartValue
    }
    localStorage.setItem('totalAmount', this.totalCartValue)
  }

  couponValidation() {
    this.service.couponValidation({
      "CouponCode": this.couponCode,
      "CartAmt": this.totalCartValue
    }).subscribe(
      res => {
        if (res.length !== 0) {
          this.couponCodeApplied = true;
          this.forumservice.toastrService.success('', 'Coupon applied successfully');
          this.msg = 'Coupon applied successfully'
          this.discount = parseFloat(res[0].Discount)
          localStorage.setItem("couponid", res[0]['CouponID'])
          this.totalCartValueDiscount = this.totalCartValue - this.discount
          localStorage.setItem('totalAmount', this.totalCartValueDiscount)
          this.percentage = res[0].Percentage
        }

        else {
          this.forumservice.toastrService.success('', 'Please enter a valid coupon code. ');
          this.msg = 'Please enter a valid coupon code. '
        }

        setTimeout(() => {
          this.msg = ''
        }, 3000)
      }
    )
  }

  getKey() {
    this.logeventservice.logEvent('click_proceed_to_pay');
    this.router.navigate(['/onboarding/payment'], { state: { quan: this.cartList.length.toString(), plan: this.cartList[0]['Plan'] } })
  }

  radioevent(event) {
    if (event.target.checked) {
      this.myself = 1;
      this.enableemail = false;
    } else {
      this.myself = 0;
    }
  }

  laterradioevent(event) {
    if (event.target.checked) {
      this.myself = 0;
      this.enableemail = false;
    }
  }

  someoneradioevent(event) {
    if (event.target.checked) {
      this.myself = 0;
      this.enableemail = true;
    }
  }


  addtoCart(program, plan) {
    if (!this.ValidateEmail()) {
      let pid = this.cartList[0]['ProgID']
      console.log(pid)
      let activecart = this.cartListResult.filter((d) => d['Program'] === program)
      if (this.cartList[0].Plan == "Monthly") {
        this.cartList[0].planId = 1
      }else {
        this.cartList[0].planId = 2
      }

      if(plan ==='Annual') {
        this.cartList[0].planId = 2
        activecart[0].planId = 2
      }else {
        activecart[0].planId = 1
        this.cartList[0].planId = 1
      }

      this.totalItemCount += 1
      this.service.addItem({
        "UserId": this.userId,
        "RateId": activecart[0].RateId,
        "Qty": 1,
        "PlanId": activecart[0].planId,
        "MySelf": 0,
        "LearnerEmail": this.learnermail,
        "LearnerMsg": this.learnermsg,
      })
        .subscribe(res => {
          console.log(res, "cartId")
          for (var i = 0; i < this.cartList.length; i++) {
            if (this.cartList[i].ProgID === pid) {
              this.cartList[i].cartId = res
            }

          }
          if (this.enableMySelf) this.enableMySelf = false;
          this.myself = 0,
            this.learnermail = '',
            this.learnermsg = '',
            this.enableemail = false
            this.aaenableEmailbox = false;
            this.teenageraenableEmailbox = false;
            this.teenagerenableMonthEmailbox = false;
            this.aenableMonthEmailbox = false
          // this.cd.detectChanges()
          this.forumservice.toastrService.success('', 'Updated Successfully !');
          this.viewCart()
        },
          error => {
            console.log(error)
          },
          () => {
            console.log(this.cartList, "afteraddidtion")
            this.totalPrice()
          })

    } else {
      this.forumservice.toastrService.success('', 'Email address is invalid');
    }
  }


  ProceedWithMonthly() {
    localStorage.setItem('isMonthlySelectedForPayment', 'T');
    this.isModalPopup = true;
  }
  getAddCartEvent() {
    this.enableedit = false
    this.enableMySelf = true;
    this.enableDecide = true;
    this.enableemail = false;
    this.learnermail = ''
    this.learnermsg = ''
    setTimeout(() => {
      if (this.isSubscribe) {
        this.enableMySelf = false;
      }
      if (this.enableMySelf == false) {
        this.myself = 0;
        this.enableemail = true;
        $("#optionsRadios10").prop("checked", true);
      }
    }, 100);
  }
  Cancel() {
    localStorage.setItem('isMonthlySelectedForPayment', 'F');
    this.isModalPopup = false;
  }

  remove() {
    if (this.cartList.length == 0) {
      this.service.isActivationFlow = true;
      this.router.navigate(['/onboarding/add-to-cart']);
    } else {
      this.service.isActivationFlow = true;
      this.router.navigate(['/onboarding/add-to-cart']);
    }
    console.log(this.cartList)
  }

  ValidateEmail() {
    var validRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (this.learnermail.match(validRegex)) {
      return false;
    } else {
      return true;
    }
  }

  calculate() {
    return this.cartList.reduce((a, d) => {
      return a = a ? a + parseInt(d.Amt) : 0 + parseInt(d.Amt);
    }, 0)
  }

  closeApplycoupon() {
    this.couponCodeApplied = false;
    this.discount = 0;
    this.totalPrice();
  }

  enableEmailboxEvent(enable, program, plan) {
    this.learnermail = '';
    if(program === 'Adults' && plan ==='Annual') {
      this.aaenableEmailbox = enable;
    }else if(program === 'Adults' && plan ==='Monthly') {
      this.aenableMonthEmailbox = enable;
    }else if(program === 'Teenagers' && plan ==='Annual') {
      this.teenageraenableEmailbox = enable;
    }else if(program === 'Teenagers' && plan ==='Monthly') {
      this.teenagerenableMonthEmailbox = enable;
    }
  }

  back(){
    this.location.back();
  }

}


