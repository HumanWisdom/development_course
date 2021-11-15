import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
  programList=JSON.parse(localStorage.getItem("programList"))
  selectedProgramID:any
  updatedProgramId:any
  selectedProgram:any
  newCouponCode:any
  updatedCouponCode:any
  updatedCouponId:any
  couponPercentage:any
  updatedCouponPercentage:any
  minCartValue:any
  updatedMinCartValue:any
  maxUsage:any
  updatedMaxUsage:any
  startDate:any
  updatedStartDate:any
  endDate:any
  updatedEndDate:any
  active:any
  searchedProgram:any
  assignTo=""
  comment=""
  updatedAssignedTo:any
  updatedComments:any
  selectedImpFlag:any
  description:any
  updatedImpFlag:any
  updatedDescription:any
  
  
  t = new Date();
  //minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate())
  //maxDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+2)+"-"+this.addZero(this.t.getDate())
  minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate())
  maxDate:any
  couponList=[]

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getCoupons()
    //console.log(this.generatecode(5))
  }
  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
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

  reset(){
    this.selectedProgramID=""
    this.minCartValue=""
    this.couponPercentage=""
    this.newCouponCode=""
    this.maxUsage=""
  
    this.maxDate=""

  }

  generatecode(length){
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }
  showDate(){
    console.log(this.minDate,this.maxDate)
  }

  addCoupon(){
    console.log(this.maxDate)
    this.service.addCoupon({ "CouponID":0,
    "CouponCode":this.newCouponCode,
   // "ProgramID":this.selectedProgramID,
    "Percentage":this.couponPercentage,
    "MinCartVal":this.minCartValue,
    "MaxUsage":this.maxUsage,
    "StartDate":this.minDate,
    "EndDate":this.maxDate,
    "Active":1,
    "AssignTo":this.assignTo,
    "Comment":this.comment
    
  })
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.reset()
        this.getCoupons()
      }
    )

  }

  initUpdate(pId,couponId,couponCode,percentage,minCartVal,maxUsage,startDate,endDate,active,assignedTo,comments
    ,description,flag){
    startDate=this.formatDate(startDate)
    endDate=this.formatDate(endDate)
    this.updatedProgramId=pId
    //this.updatedCouponId=couponId
    this.updatedCouponCode=couponCode
    this.updatedCouponPercentage=percentage
    this.updatedMinCartValue=minCartVal
    this.updatedMaxUsage=maxUsage
    this.updatedStartDate=startDate
    this.updatedEndDate=endDate
    this.active=active
    this.updatedAssignedTo=assignedTo
    this.updatedComments=comments
    this.updatedDescription=description
    this.updatedImpFlag=flag



  }
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

selectImpFlag(e){
  console.log(e)
  this.selectedImpFlag=e
}

  toggleCouponStatus(couponId,programId,couponCode,percentage,minCartVal,maxUsage,startDate,endDate,active,a,c){
  startDate=this.formatDate(startDate)
  endDate=this.formatDate(endDate)
    console.log(startDate,endDate)
   
  

    if(active=="True")
      var toggledStatus=0
    else
      toggledStatus=1

      this.service.addCoupon({ "CouponID":couponId,
    "CouponCode":couponCode,
    //"ProgramID":parseInt(programId),
    "Percentage":percentage,
    "MinCartVal":parseInt(minCartVal),
    "MaxUsage":maxUsage,
    "StartDate":startDate,
    "EndDate":endDate,
    "Active":toggledStatus,
    "AssignTo":a,
    "Comment":c,
    "MostImp":this.selectedImpFlag,
    "Desc":this.description
    
  })
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getCoupons()
      }
    )


  }

  updateCoupon(couponId,progId){
    if(this.active=="False")
      this.active=0
    else
      this.active=1
    this.service.addCoupon({ "CouponID":couponId,
    "CouponCode":this.updatedCouponCode,
   // "ProgramID":progId,
    "Percentage":this.updatedCouponPercentage,
    "MinCartVal":this.updatedMinCartValue,
    "MaxUsage":this.updatedMaxUsage,
    "StartDate":this.updatedStartDate,
    "EndDate":this.updatedEndDate,
    "Active":this.active,
    "AssignTo":this.updatedAssignedTo,
    "Comment":this.updatedComments

    
  })
    .subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getCoupons()
      }
    )

  }

  getCoupons(){
    this.service.getCoupon().subscribe(res=>
      {
        console.log(res)
        this.couponList=res
       
        console.log(this.couponList,"coupon  list")
        this.couponList=this.couponList.map(coupon=>({...coupon, ...this.programList.find(program=> program.ID==coupon.ProgId)}))

      }
    )
   
  }

  deleteCoupon(id){
    console.log(id)
    this.service.deleteCoupon({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.getCoupons()
      }
    )


  }

  searchProgram(){
    if(this.searchedProgram=="")
    this.getCoupons()
  else{
    this.couponList=this.couponList.filter(res=>{
      return res.Program.toLocaleLowerCase().match(this.searchedProgram.toLocaleLowerCase())
    })
  }

  }


}
