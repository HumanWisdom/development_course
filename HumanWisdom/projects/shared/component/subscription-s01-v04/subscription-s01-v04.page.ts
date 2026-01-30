import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { Location } from '@angular/common'
import { LogEventService } from "../../services/log-event.service";
import { ForumService } from '../../forum/forum.service';
import { SharedService } from '../../services/shared.service';
import { CommonService } from '../../services/common.service';
import { ProgramType } from '../../models/program-model';
import { Platform } from '@angular/cdk/platform';
@Component({
  selector: 'app-subscription-s01-v04',
  templateUrl: './subscription-s01-v04.page.html',
  styleUrls: ['./subscription-s01-v04.page.scss'],
})
export class SubscriptionS01V04Page implements OnInit, OnDestroy {
  @ViewChild('closemodal') closemodal: ElementRef;
  isAdults = false;
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
  enableAddMemForm = false;
  selectedProgram = '';
  selectedMonth = '';
  selectedPrice = '';
  ios: boolean;
  isAndroid = false;

  constructor(
    private readonly router: Router,
    public service: OnboardingService,
    public services: CommonService,
    private readonly location: Location,
    public logeventservice: LogEventService,
    private readonly cd: ChangeDetectorRef,
    private readonly forumservice: ForumService,
    public platform: Platform,
  ) {
    this.isAndroidDevice();
    let res = localStorage.getItem("isloggedin")
    if (res !== 'T') this.router.navigate([`/${SharedService.getprogramName()}/onboarding/login`], { replaceUrl: true, skipLocationChange: true })
    if (localStorage.getItem('subscribepage') === 'T') {
      this.router.navigate([`/${SharedService.getprogramName()}/onboarding/login`], { replaceUrl: true, skipLocationChange: true })
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
    const data = SharedService.getDataFromLocalStorage('BuyAgain');
    if (data && data != null) {
      const cart = JSON.parse(data);
      setTimeout(() => {
        this.cartListResult[0].planId = Number.parseInt(cart.PlanID);
        this.cartListResult[0].RateId = cart.RateID;
        this.learnermail = cart.ConsumerEmail
        this.addToCart('Adults', 'Annual');
      }, 5000);

    }
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    if (localStorage.getItem('giftwisdom') === 'F') {
      this.enableGift = true;
    }
    const popup = JSON.parse(localStorage.getItem("Subscriber"))
    if (popup === 1) this.enablepopup = true
    this.isSubscribe = popup !== 0;
    console.log("save username", this.saveUsername)
    if (!this.saveUsername)
      this.userId = JSON.parse(sessionStorage.getItem("userId"))
    else
      this.userId = JSON.parse(localStorage.getItem("userId"))
    console.log("userID", this.userId)
    this.getCountry();
    this.viewCart();

    setTimeout(() => {

    }, 7000)

    if (this.platform.IOS || this.platform.SAFARI || this.iOS()) {
      this.ios = true;
    }
  }

  EnableAddMemForm() {
    this.enableAddMemForm = true;
  }

  clickFreeTrial() {
    this.router.navigate([SharedService.getprogramName()+  '/subscription/start-your-free-trial']);
  }

  enableEmailboxEvent(enable, plan, type) {
    if (enable) {
      this.loggedUser()
      this.planWarning = false;
      const id = this.cartList.filter((d) => d['Program'] === type)

      for (const cartItem of this.cartList) {
        if (cartItem.ProgID === id[0].ProgID) {
          cartItem.planId = plan === "Monthly" ? 1 : 2;
          cartItem.selectedSubscription = plan
          cartItem.price = plan === "Annual" ? cartItem.Annual : cartItem.Monthly;
        }
      }
    }
    this.learnermail = '';
    if (enable) {
      if (type === 'Adults') {
        this.aaenableEmailbox = plan === 'Annual';
        this.aenableMonthEmailbox = plan !== 'Annual';
        this.teenageraenableEmailbox = false;
        this.teenagerenableMonthEmailbox = false;
      } else if (type === 'Teenagers') {
        this.teenageraenableEmailbox = plan === 'Annual';
        this.teenagerenableMonthEmailbox = plan !== 'Annual';
        this.aaenableEmailbox = false;
        this.aenableMonthEmailbox = false;
      }
    } else if (type === 'Adults') {
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

  viewCart() {
    this.service.viewCart({ "Id": this.userId })
      .subscribe(res => {
        this.totalCount = 0
        this.cartitemList = res;
        this.totalPrice();

      },
        error => {
          console.log(error)
        })
  }

  getActivationCode() {
    localStorage.setItem("activeCode", 'T')
    this.router.navigate([`/${SharedService.getprogramName()}/onboarding/login`], { replaceUrl: true, skipLocationChange: true })
  }


  proceedcart() {
    this.logeventservice.logEvent('click_view_cart');
    this.router.navigate([`/${SharedService.getprogramName()}/onboarding/viewcart`])
  }

  already(value) {
    this.closemodal.nativeElement.click()
    if (value === 'home') {
      this.router.navigate([SharedService.getDashboardUrls()])
    } else {
      this.router.navigate([`/${SharedService.getprogramName()}/onboarding/login`], { replaceUrl: true, skipLocationChange: true })
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
        },
        error => {
          console.log(error);
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

      for (const item of this.cartitemList) {
        if (item.MySelf == "True") {
          console.log('delete cart')
          const id = item.CartId;
          console.log(id)
          this.cartitemList.splice(this.cartitemList.indexOf(item), 1)
          this.service.deleteItem({ "Id": Number.parseFloat(id) })
            .subscribe(res => {
              if (res) {
                let code: any = 1
                localStorage.setItem('Subscriber', code)
                this.thirdpage = false
                this.firstpage = false
                this.secondpage = false;
                this.fourthpage = true;
                if (this.yearormonth == 'Year' && this.service.isActivationFlow) {
                  this.router.navigate([`/${SharedService.getprogramName()}/hwp-premium-congratulations`]);
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
    this.selectedCountryId = countryId
    this.getPricing()
  }


  loggedUser() {
    if (!this.userId) {
      console.log("login first")
      this.router.navigate([`/${SharedService.getprogramName()}/onboarding/login`])
    }

  }

  getPricing() {
    this.service.getPricing(this.countryCode).subscribe(res => {

      res = res.filter((d) => d['ActiveProgram'] === "1");

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
          "LearnerMsg": "",
          "ISOCode":""
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
          "LearnerEmail": [],
          "LearnerMsg": "",
          "ISOCode":""
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
          "LearnerMsg": "",
          "ISOCode":""
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
          "LearnerMsg": "",
          "ISOCode":""
        }
      ]

      res.forEach((d) => {
        if (d['Program'] === 'Adults') {
            obj[0]['RateId'] = d['RateID']
            obj[0]['Symbol'] = d['CurSymbol']
            obj[0]['Amt'] = (Number(d['Annual']) / 12).toString()
            obj[0]['Program'] = d['Program']
            obj[0]['ISOCode'] = d['ISOCode']
            obj[1]['RateId'] = d['RateID']
            obj[1]['Symbol'] = d['CurSymbol']
            obj[1]['Amt'] = d['Monthly']
            obj[1]['Program'] = d['Program']
            obj[1]['ISOCode'] = d['ISOCode']
        } else if (d['Program'] === 'Teenagers') {
            obj[2]['RateId'] = d['RateID']
            obj[2]['Symbol'] = d['CurSymbol']
            obj[2]['Amt'] = (Number(d['Annual']) / 12).toString()
            obj[2]['Program'] = d['Program']
            obj[2]['ISOCode'] = d['ISOCode']
            obj[3]['RateId'] = d['RateID']
            obj[3]['Symbol'] = d['CurSymbol']
            obj[3]['Amt'] = d['Monthly']
            obj[3]['Program'] = d['Program']
            obj[3]['ISOCode'] = d['ISOCode']
        }
      });

      this.cartList = obj;
      localStorage.setItem('ISOCode', obj[0]['ISOCode']);

      this.defaultCurrencySymbol = res[0]['ISOCode'];
      this.getAmount();
    }, (err) => {
      globalThis.alert(err.error['Message'])
    }
    )
  }

  getAnnualVal(annual) {
   return (Number(annual) / 12);
  }

  selectProgram(value) {
    value = value.split(",");
    this.selectedProgram = value[2];
    this.selectedMonth = value[1];
    this.selectedPrice = value[0];
  }

  addToCartForm() {
    if (this.ValidateEmail()) {
      this.forumservice.toastrService.success('', 'Email address is invalid');
    } else if (this.selectedProgram) {
      this.logeventservice.logEvent('click_done');
      this.loggedUser()
      const pid = this.cartList.find((d) => d['Program'] === this.selectedProgram);
      if (this.selectedMonth == "Monthly") {
        pid.planId = 1
      } else {
        pid.planId = 2
      }
      this.service.addItem({
        "UserId": this.userId,
        "RateId": pid.RateId,
        "Qty": 1,
        "PlanId": pid.planId,
        "MySelf": 0,
        "LearnerEmail": this.learnermail,
        "LearnerMsg": this.learnermsg,
      })
        .subscribe(res => {
          localStorage.removeItem('BuyAgain');
          this.myself = 0;
          this.learnermail = '';
          this.learnermsg = '';
          this.enableemail = false;
          this.enableAddMemForm = false;
          this.selectedProgram = '';
          this.selectedMonth = '';
          this.selectedPrice = '';
          this.forumservice.toastrService.success('', 'Updated Successfully !');
          this.cd.detectChanges()
          this.viewCart()
        },
          error => {
            this.forumservice.toastrService.success('', error['error']['Message']);
            console.log(error)
          },
          () => {
            this.totalPrice()
          })
    }
  }

  addToCart(program, plan) {
    if (this.ValidateEmail()) {
      this.forumservice.toastrService.success('', 'Email address is invalid');
    } else {
      this.logeventservice.logEvent('click_done');
      this.loggedUser()
      const pid = this.cartList.find((d) => d['Program'] === program)
      let activeItem = null;
      for (const cartItem of this.cartList) {
        if (cartItem.ProgID === pid.ProgID) {
          if (!activeItem) {
            activeItem = cartItem;
          }
          this.checkPopup(cartItem)
          this.showCart = true
          this.planWarning = false
          this.totalItemCount += 1
          cartItem.qty += 1;
          if (cartItem.selectedSubscription == "Monthly") {
            cartItem.selectedSubscription = "Monthly"
            cartItem.price = cartItem.Monthly * cartItem.qty
            cartItem.planId = 1
          }
          else {
            cartItem.selectedSubscription = "Annual"
            cartItem.price = cartItem.Annual * cartItem.qty
            cartItem.planId = 2

          }
          this.service.addItem({
            "UserId": this.userId,
            "RateId": pid.RateID,
            "Qty": 1,
            "PlanId": cartItem.planId,
            "MySelf": 0,
            "LearnerEmail": this.learnermail,
            "LearnerMsg": this.learnermsg,
          })
            .subscribe(res => {
              localStorage.removeItem('BuyAgain');
              this.cartId = res
              for (const item of this.cartList) {
                if (item.ProgID === pid.ProgID) {
                  item.cartId = res
                }
              }
              if (this.enableMySelf) this.enableMySelf = false;
              this.enableadd = true;
              this.myself = 0;
              this.learnermail = '';
              this.learnermsg = '';
              this.enableemail = false;
              this.forumservice.toastrService.success('', 'Updated Successfully !');

              if (program === 'Adults') {
                if (activeItem?.selectedSubscription === 'Annual') {
                  this.aaenableEmailbox = false
                } else {
                  this.aenableMonthEmailbox = false
                }
              } else if (program === 'Teenagers') {
                if (activeItem?.selectedSubscription === 'Annual') {
                  this.teenageraenableEmailbox = false
                } else {
                  this.teenagerenableMonthEmailbox = false
                }
              }

              this.cd.detectChanges()
              this.viewCart();
            },
              error => {
                this.forumservice.toastrService.success('', error['error']['Message']);
                console.log(error)
              },
              () => {


              })
        }

      }
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

  removeFromCart(cid) {
    this.service.deleteItem({ "Id": Number.parseFloat(cid) })
      .subscribe((res) => {
        this.viewCart();
      });
  }

  ValidateEmail() {
    const validRegex = String.raw`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`;
    return !this.learnermail.match(validRegex);
  }

  totalPrice() {
    this.totalCartValue = 0;
    for (const item of this.cartitemList) {
      this.totalCartValue += Number(item.Amt);
    }
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
      if (!this.enableMySelf) {
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
    if (res === 'qty') {
      let fil = this.cartitemList.filter((d) => d['Program'] === program && type === d['Plan'])
      result = fil.length;
    }
    return result;
  }

  goBack() {
    this.router.navigate([SharedService.getDashboardUrls()])
  }
  
  iOS() {
    const platform = (navigator as any).userAgentData?.platform || navigator.platform;
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

  isAndroidDevice(){
    this.isAndroid = SharedService.isAndroid();
  }
}
