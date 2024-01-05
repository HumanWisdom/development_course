import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../../../../../shared/services/onboarding.service';
import { Location } from '@angular/common'
import { AdultsService } from 'src/app/adults/adults.service';
import { LogEventService } from "../../../../../../shared/services/log-event.service";
import { ForumService } from '../../../../../../shared/forum/forum.service';
import { SharedService } from '../../../../../../shared/services/shared.service';


@Component({
  selector: 'app-subscription-s01-v04',
  templateUrl: './subscription-s01-v04.page.html',
  styleUrls: ['./subscription-s01-v04.page.scss'],
})
export class SubscriptionS01V04Page implements OnInit {
  @ViewChild('closemodal') closemodal: ElementRef;

  selectedCountryId: any
  selectedCountry: any
  selectedBracket: any
  selectedPlan: any
  cartList = []
  //userId=sessionStorage.getItem("userId")
  userId: any
  cartId: any
  learnermail: any = ''
  learnermsg: any = ''
  activationCode: any = ''
  planWarning = false

  cartProductionList: any
  isModalPopup = false;
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  countryList = []
  totalCartValue: any
  totalItemCount = 0
  showCart = false
  enablepopup = false
  enableadd = false
  enableemail = false
  enableActivate = false
  selectedSubscription = "Annual"
  defaultCountry: any
  defaultCurrency: any
  defaultCurrencySymbol: any
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
  isActivateModal = false;
  public showWarning = false
  aaenableEmailbox = false
  aenableMonthEmailbox = false
  isAdultsEnable = false
  isTeenagerEnable = false
  teenageraenableEmailbox = false
  teenagerenableMonthEmailbox = false
  cartListResult = []
  totalCount = 0

  constructor(
    private router: Router,
    public service: OnboardingService,
    public services: AdultsService,
    private location: Location,
    public logeventservice: LogEventService,
    private cd: ChangeDetectorRef,
    private forumservice: ForumService
  ) {
    let res = localStorage.getItem("isloggedin")
    if (res !== 'T') this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
    if (localStorage.getItem('subscribepage') === 'T') {
      this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
    }
    if (localStorage.getItem("email") === 'guest@humanwisdom.me') {
      this.enableLoginSubscriber = true;
    } else {
      this.enableLoginSubscriber = false;
      localStorage.setItem("activeCode", 'F')
    }
    let namedata = localStorage.getItem('name').split(' ')
    this.modaldata['email'] = localStorage.getItem('email');
    this.modaldata['firstname'] = namedata[0];
    this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
    if (this.service.isActivationFlow) {
      setTimeout(() => {
        this.ActivationFlow();
      }, 300);
    }
    var data  = SharedService.getDataFromLocalStorage('BuyAgain');
    if(data && data!=null){
     var cart = JSON.parse(data);
     setTimeout(() => {
      this.cartListResult[0].planId=parseInt(cart.PlanID);
      this.cartListResult[0].RateId=cart.RateID;
      this.learnermail= cart.ConsumerEmail
      this.addToCart('Adults','Annual');
     }, 5000);

    }
  }

  ngOnInit() {
    if (localStorage.getItem('giftwisdom') === 'F') {
      this.enableGift = true;
    }
    let popup = JSON.parse(localStorage.getItem("Subscriber"))
    if (popup === 1) this.enablepopup = true
    this.isSubscribe = popup === 0 ? false : true;
    console.log("save username", this.saveUsername)
    if (this.saveUsername == false)
      this.userId = JSON.parse(sessionStorage.getItem("userId"))
    else
      this.userId = JSON.parse(localStorage.getItem("userId"))
    console.log("userID", this.userId)
    this.getCountry();
    this.viewCart();

    setTimeout(() => {
      console.log(this.cartList)
    }, 7000)

  }

  enableEmailboxEvent(enable, plan, type) {
    if (enable) {
      this.loggedUser()
      this.planWarning = false;
      let id = [];
      console.log(plan, id)
      id = this.cartList.filter((d) => d['Program'] === type)

      for (var i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].ProgID === id[0].ProgID) {
          if (plan == "Monthly") {
            this.cartList[i].planId = 1
          } else {
            this.cartList[i].planId = 2
          }
          this.cartList[i].selectedSubscription = plan
          if (plan == "Annual")
            this.cartList[i].price = this.cartList[i].Annual
          else
            this.cartList[i].price = this.cartList[i].Monthly
        }
      }
      console.log(this.cartList)
    }
    this.learnermail = '';
    if(enable) {
      if (type === 'Adults') {
        if (plan === 'Annual') {
          this.aaenableEmailbox = enable;
          this.aenableMonthEmailbox = false;
          this.teenageraenableEmailbox = false;
          this.teenagerenableMonthEmailbox = false;
        } else {
          this.aenableMonthEmailbox = enable
          this.aaenableEmailbox = false;
          this.teenageraenableEmailbox = false;
          this.teenagerenableMonthEmailbox = false;
        }
      } else if (type === 'Teenagers') {
        if (plan === 'Annual') {
          this.aaenableEmailbox = false;
          this.aenableMonthEmailbox = false;
          this.teenagerenableMonthEmailbox = false;
          this.teenageraenableEmailbox = enable
        } else {
          this.aaenableEmailbox = false;
          this.aenableMonthEmailbox = false;
          this.teenageraenableEmailbox = false;
          this.teenagerenableMonthEmailbox = enable
        }
      }
    }else {
      if (type === 'Adults') {
        if (plan === 'Annual') {
          this.aaenableEmailbox = enable;
        } else {
          this.aenableMonthEmailbox = enable
        }
      } else if (type === 'Teenagers') {
        if (plan === 'Annual') {
          this.teenageraenableEmailbox = enable
        } else {
          this.teenagerenableMonthEmailbox = enable
        }
      }
    }
  }

  viewCart() {
    this.service.viewCart({ "Id": this.userId })
      .subscribe(res => {
        this.totalCount = 0
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
          this.totalCount += 1
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


        if (res && res.length !== 0) {
          this.cartListResult = obj
          this.cartitemList = res;
          if (res[0]['Plan'] === 'Annual') this.typeList.splice(1, 1);
          else this.typeList.splice(0, 1);
          if (res.some((d) => d['MySelf'] === "True")) {
            this.enableMySelf = false
          } else {
            if (localStorage.getItem('giftwisdom') === 'F') {
              this.myself = 1
              this.enableMySelf = true
            }
          }
        } else {
          if (localStorage.getItem('giftwisdom') === 'F') {
            this.myself = 1
            this.enableMySelf = true
          }
        }

      },
        error => {
          console.log(error)
        })
  }

  getActivationCode() {
    localStorage.setItem("activeCode", 'T')
    this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
  }


  proceedcart() {
    this.logeventservice.logEvent('click_view_cart');
    this.router.navigate(['/onboarding/viewcart'])
  }

  already(value) {
    this.closemodal.nativeElement.click()
    if (value === 'home') {
      this.router.navigate(['/adults/adult-dashboard'])
    } else {
      this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
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
    this.showWarning = false
    console.log("Submit verify")
    this.services.verifyactkey(this.activationCode)
      .subscribe(
        res => {
          if (res) {
            this.showWarning = true
            this.yearormonth = res
            this.thirdpage = false
            this.firstpage = false
            this.secondpage = true;
          } else {
            this.secondpage = false;
            this.thirdpage = true
          }
          // this.enableActivate = true;
          // this.closemodal.nativeElement.click()

          // this.router.navigate(['/adults/adult-dashboard'])
        },
        error => {
          console.log(error);

          // window.alert(error.error['Message'])
        },
        () => {
        });
    if (this.showWarning === false) {
      this.secondpage = false;
      this.thirdpage = true
    }
  }
  Confirm() {
    this.submitcode();
  }


  submitcode() {
    this.logeventservice.logEvent('click_activation_code_submit');


    this.service.verifyActivationKey(this.activationCode, this.userId, this.countryCode)
      .subscribe(
        res => {

          for (var i = 0; i < this.cartitemList.length; i++) {
            if (this.cartitemList[i].MySelf == "True") {
              console.log('delete cart')
              var id = this.cartitemList[i].CartId;
              console.log(id)
              this.cartitemList[i].Qty == 1
              this.cartitemList.splice(i, 1)
              this.service.deleteItem({ "Id": parseFloat(id) })
                .subscribe(res => {
                  if (res) {
                    let code: any = 1
                    localStorage.setItem('Subscriber', code)
                    this.thirdpage = false
                    this.firstpage = false
                    this.secondpage = false;
                    this.fourthpage = true;
                    if (this.yearormonth == 'Year' && this.service.isActivationFlow) {
                      this.router.navigate(['/adults/hwp-premium-congratulations']);
                    }
                  } else {
                    this.secondpage = false;
                    this.thirdpage = false
                    this.fourthpage = true
                  }
                },
                  error => {
                    this.secondpage = false;
                    this.thirdpage = true
                  },

                  () => {


                  }
                )
              this.service.isActivationFlow = true;
            } else {
              this.service.isActivationFlow = true;
            }
          }
        });
    this.secondpage = false;
    this.thirdpage = false
    this.fourthpage = true
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

  emailinput(event) {
    this.learnermail = event.target.value;
  }

  msginput(event) {
    this.learnermsg = event.target.value;
  }

  getCountry() {
    this.service.getCountry().subscribe((res: any) => {

      if (res['in_eu']) {
        this.countryCode = 'EUR'
      } else {
        this.countryCode = res['country_code_iso3']
      }
      this.getPricing()
      this.defaultCountry = res?.country_name
    },

      error => {
        console.log(error)
      },
      () => {
      });

  }

  getCurrencies() {
    console.log("my country", this.defaultCountry)
    this.service.getCurrencies().subscribe(res => {

      this.countryList = res.filter((item, i, arr) => arr.findIndex((t) => t.CountryId === item.CountryId) === i);
      console.log(this.countryList)
      let found = this.countryList.find(o => o.Country == this.defaultCountry)
      if (found) {
        console.log("found")
        this.defaultCurrency = found.Currency
        this.defaultCurrencySymbol = found.CurSymbol
        this.selectedCountryId = found.CountryId
        this.getPricing()
      }
      else {
        console.log("not found")
      }
    }
    )
  }



  selectCountry(countryId) {
    // console.log(country)
    // this.selectedCountryId=this.countryList.filter(r=>{return r.Country==country})[0].CID
    this.selectedCountryId = countryId
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
  loggedUser() {
    if (!this.userId) {
      console.log("login first")
      this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })

    }



  }



  getPricing() {
    this.service.getPricing(this.countryCode).subscribe(res => {
      console.log(res, "product list from api")
      this.cartList = res.filter((d) => d['ActiveProgram'] === "1");
      this.cartList.forEach((element, i) => {
        element.Monthly = parseInt(element.Monthly)
        element.Annual = parseInt(element.Annual)
        element.selectedSubscription = "null"
        element.price = 0
        element.planId = 0
        element.cartId = 0
        element.later = 0
        if (element['Program'] === 'Adults' && element['ActiveProgram'] === '1') {
          this.isAdultsEnable = true;
        }
        if (element['Program'] === 'Teenagers' && element['ActiveProgram'] === '1') {
          this.isTeenagerEnable = true;
        }

      });
      this.defaultCurrencySymbol = res[0]['ISOCode'];
      let symbol = res[0][''];
      this.getAmount();
      if(this.cartListResult && this.cartListResult.length !== 0) {
        this.cartListResult.forEach((d) => {
          if(d['Symbol'] !== symbol) {
            d['LearnerEmail'].forEach((m) => {
              this.removeFromCart(m['CartId'], d['Program'], d['Plan'])
            });
          }
        })
      }

    }, (err) => {
      window.alert(err.error['Message'])
    }
    )
  }

  addToCart(program, plan) {
    if (!this.ValidateEmail()) {
      this.logeventservice.logEvent('click_done');
      this.loggedUser()
      let pid = this.cartList.filter((d) => d['Program'] === program)
      let activeId = null;
      for (var i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].ProgID === pid[0]['ProgID']) {
          if(!activeId) {
            activeId = i
          }
          this.checkPopup(this.cartList[i])
          this.showCart = true
          this.planWarning = false
          this.totalItemCount += 1
          this.cartList[i].qty += 1;
          if (this.cartList[i].selectedSubscription == "Monthly") {
            this.cartList[i].selectedSubscription = "Monthly"
            this.cartList[i].price = this.cartList[i].Monthly * this.cartList[i].qty
            this.cartList[i].planId = 1
          }
          else {
            this.cartList[i].selectedSubscription = "Annual"
            this.cartList[i].price = this.cartList[i].Annual * this.cartList[i].qty
            this.cartList[i].planId = 2

          }
          this.service.addItem({
            "UserId": this.userId,
            "RateId": pid[0].RateID,
            "Qty": 1,
            "PlanId": pid[0].planId,
            "MySelf": 0,
            "LearnerEmail": this.learnermail,
            "LearnerMsg": this.learnermsg,
          })
            .subscribe(res => {
              localStorage.removeItem('BuyAgain');
              this.cartId = res
              for (var i = 0; i < this.cartList.length; i++) {
                if (this.cartList[i].ProgID === pid[0]['ProgID']) {
                  this.cartList[i].cartId = res
                }

              }
              if (this.enableMySelf) this.enableMySelf = false;
              this.enableadd = true;
              this.myself = 0,
                this.learnermail = '',
                this.learnermsg = '',
                this.enableemail = false
              this.forumservice.toastrService.success('', 'Updated Successfully !');

              if (program === 'Adults') {
                if (this.cartList[activeId]?.selectedSubscription === 'Annual') {
                  this.aaenableEmailbox = false
                } else {
                  this.aenableMonthEmailbox = false
                }
              } else if (program === 'Teenagers') {
                if (this.cartList[activeId]?.selectedSubscription === 'Annual') {
                  this.teenageraenableEmailbox = false
                } else {
                  this.teenagerenableMonthEmailbox = false
                }
              }

              this.cd.detectChanges()
              this.viewCart()
            },
              error => {
                this.forumservice.toastrService.success('', error['error']['Message']);
                console.log(error)
              },
              () => {
                console.log(this.cartList[i])
                console.log(this.cartList, "afteraddidtion")
                this.totalPrice()
              })
        }

      }
    } else {
      this.forumservice.toastrService.success('', 'Email address is invalid');
    }
  }

  checkPopup(item) {
    console.log(item)
    if (item.later == 1)
      console.log("do not show popup")
    else {
      console.log("show")

    }


  }

  removeFromCart(cid, program, plan) {
        for (var j = 0; j < this.cartListResult.length; j++) {
          if(this.cartListResult[j]['Program'] === program && this.cartListResult[j]['Plan'] === plan) {
            for (var m = 0; m < this.cartListResult[j]['LearnerEmail'].length; m++) {
              if(this.cartListResult[j]['LearnerEmail'][m].CartId === cid) {
                this.cartListResult[j]['LearnerEmail'].splice(m, 1)
                this.cartListResult[j]['Qty'] = this.cartListResult[j]['LearnerEmail'].length
              }
            }
          }
        }

        this.service.deleteItem({ "Id": parseFloat(cid) })
        .subscribe((res) => {
          this.totalCount -= 1
         });
  }

  ValidateEmail() {
    var validRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (this.learnermail.match(validRegex)) {
      return false;
    } else {
      return true;
    }
  }

  totalPrice() {
    //this.selectedSubscription="annual"
    this.totalCartValue = 0;
    for (var i = 0; i < this.cartList.length; i++) {
      this.totalCartValue += (this.cartList[i].price);
    }
    console.log(this.totalCartValue, this.totalItemCount)
  }

  getAmount() {
    // this.cartList[0].qty = this.cartitemList.length
    this.cartitemList.forEach((d) => {
      if (d['Program'] === 'Adults') {
        this.cartList[0].qty = this.cartList[0]?.qty ? this.cartList[0].qty + 1 : 1;
      }
      if (d['Program'] === 'Teenagers') {
        this.cartList[1].qty = this.cartList[1]?.qty ? this.cartList[1].qty + 1 : 1;
      }

    })

    if (this.cartitemList.length === 0) {
      this.cartList[0].price = this.cartList[0]['Annual']
    } else {
      this.cartList[0].price = this.cartitemList[0].Amt
      this.cartList[0].selectedSubscription = this.cartitemList[0].Plan
    }
    this.enableData = true;
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    sessionStorage.setItem("cartList", JSON.stringify(this.cartList))
    if (localStorage.getItem('giftwisdom') === 'T') {
      localStorage.setItem('giftwisdom', 'F')
    }
    //   totalCartValue:any
    // totalItemCount=0
  }
  ActivationFlow() {
    this.logeventservice.logEvent('click_already_have_subscription_code');
    if (this.isActivateModal) {
      this.isActivateModal = false;
    } else {
      this.isActivateModal = true;
    }

  }
  Cancel() {
    if (this.service.isActivationFlow && !this.service.isAdvert_hwp) {
      this.proceedcart();
      localStorage.setItem('isMonthlySelectedForPayment', 'F');
      this.isModalPopup = false;
      this.service.isActivationFlow = false;
    } else {
      localStorage.setItem('isMonthlySelectedForPayment', 'F');
      this.isModalPopup = false;
      this.service.isActivationFlow = false;
      if (this.service.isAdvert_hwp) {
        this.service.isAdvert_hwp = false;
        this.router.navigate(['/adults/adverts-hwp-app']);
      }
    }
  }
  AddCarBeforePopuP() {
    this.logeventservice.logEvent('click_addtocart');
    setTimeout(() => {
      if (this.isSubscribe) {
        this.enableMySelf = false;
      }
      if (this.enableMySelf == false) {
        if (this.isSubscribe) {
          this.enableMySelf = false;
        }
        this.myself = 0;
        this.enableemail = true;
        $("#optionsRadios10").prop("checked", true);
      }
    }, 100);
  }

  getValue(res = '', type = '', program = '') {
    let result: any = '';
    if(res === 'qty') {
      let fil = this.cartitemList.filter((d) => d['Program'] === program && type === d['Plan'])
      result = fil.length;
    }
    return result;
  }

  goBack(){
    this.location.back()
  }
}
