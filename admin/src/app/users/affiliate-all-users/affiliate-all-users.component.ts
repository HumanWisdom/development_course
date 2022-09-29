import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-affiliate-all-users',
  templateUrl: './affiliate-all-users.component.html',
  styleUrls: ['./affiliate-all-users.component.css']
})

export class AffiliateAllUsersComponent implements OnInit {

	affiliates: any = [];
	getAffliateCommisionApiRes: any = [];
	affiliateParentData: FormGroup;
	searchedLevel: any = "";
	searchedName: any = "";
	searchedPaymentStatus: any = "";
	searchedFromDate: any = "2020-01-01";
	searchedToDate: any = "2030-01-01";
	searchedCoupon: any = "";
	id: any = 0;
	isChecked = false;
	isAllChecked = false;
	allCheck: any = 0;
	SubscrAmountTotal: any = 0.0;
	CommEarnedTotal: any = 0.0;
	PaymentPending: any = 0.0;






	constructor(
		public _userservice: UsersService,
		private route: ActivatedRoute
	) {
		this.intializeForm();
	}

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id');
		//this.getUserByID(this.id);
		this.getAffliateCommision(this.id);
	}


	intializeForm(): void {
    this.affiliateParentData = new FormGroup({
      CouponCode: new FormControl({ value: null, disabled: true }),
      CouponPercent: new FormControl({ value: null, disabled: true }),
      PercentageSelf: new FormControl({ value: null, disabled: true }),
      Percent_Child: new FormControl({ value: null, disabled: true }),
      Percent_GrandChild: new FormControl({ value: null, disabled: true }),
    });
  }

  getAffliateCommision(id) {
  	if(id == 0){
			this._userservice.getAffliateCommision().subscribe((res: any) => {
				this.affiliates = res;
				this.getAffliateCommisionApiRes = res;
				this.affiliates.map((element) => {
					element.isChecked = false;
					if(element.CommisionPaid == 0){
						this.allCheck = 1;
					}
					this.SubscrAmountTotal = this.SubscrAmountTotal + parseFloat(element.Amount);
					this.CommEarnedTotal = this.CommEarnedTotal + parseFloat(element.CommisionEarned);

				});
			}, (err: any) => {
				console.log(err);
			})
		}else{
			this._userservice.getAffliateCommisionById(id).subscribe((res: any) => {
				this.affiliates = res;
				this.getAffliateCommisionApiRes = res;
				this.affiliates.map((element) => {
					element.isChecked = false;
					if(element.CommisionPaid == 0){
						this.allCheck = 1;
					}
					this.SubscrAmountTotal = this.SubscrAmountTotal + parseFloat(element.Amount);
					this.CommEarnedTotal = this.CommEarnedTotal + parseFloat(element.CommisionEarned);

				});
			}, (err: any) => {
				console.log(err);
			})
		}


	}



	getUserByID(id) {
		console.log("id2 : ", id);
		this._userservice.getUserByID(id).subscribe((res: any) => {
      if (res.length) {
        this.affiliateParentData.patchValue(res[0]);
        console.log("Ubed Here: ", res[0]);
        //this.editUser = userID;
      }
    }, (err: any) => {
      console.log(err);
    })
  }


	checkValue(event: any){

		if(event != 0){
			this.affiliates[event].isChecked;
			if(this.affiliates[event].isChecked){
				this.PaymentPending = parseFloat(this.PaymentPending) + parseFloat(this.affiliates[event].CommisionEarned);
			}else{
				this.PaymentPending = parseFloat(this.PaymentPending) - parseFloat(this.affiliates[event].CommisionEarned);
			}
			
		}else{
			this.PaymentPending = 0;
			this.affiliates.forEach(res => {
		 		if(this.isAllChecked == false){
					res.isChecked = false;
		 		}else{
		 			if(res.CommisionPaid == 0){
						res.isChecked = true;
						this.PaymentPending = parseFloat(this.PaymentPending) + parseFloat(res.CommisionEarned);
					}
		 		}
			});
		}

		this.PaymentPending = this.PaymentPending.toFixed(2);
	}


	
  searchFilter(){
  		this.SubscrAmountTotal = 0;
  		this.CommEarnedTotal = 0;
			this.affiliates=this.getAffliateCommisionApiRes.filter(res=>{

				var subDate = new Date(res.SubscrDate + ' 05:30:00');
				var subDateTime = subDate.getTime();

				var fromDate = new Date(this.searchedFromDate);
				var fromDateTime = fromDate.getTime();

				var toDate = new Date(this.searchedToDate);
				var toDateTime = toDate.getTime();
				

				//res.FName.toLocaleLowerCase().match(this.searchedFirstName.toLocaleLowerCase())
				return (subDateTime >= fromDateTime && subDateTime <= toDateTime && res.AffName.toLocaleLowerCase().match(this.searchedName.toLocaleLowerCase()) && res.CouponCode.toLocaleLowerCase().match(this.searchedCoupon.toLocaleLowerCase()) && res.Level.toLocaleLowerCase().match(this.searchedLevel.toLocaleLowerCase()) && res.CommisionPaid.match(this.searchedPaymentStatus))
			});
			this.affiliates.forEach(res => {
				this.SubscrAmountTotal = this.SubscrAmountTotal + parseFloat(res.Amount);
				this.CommEarnedTotal = this.CommEarnedTotal + parseFloat(res.CommisionEarned);
			});
  }


  pay(){
  	let idsArr:string[]=[] ;
  	this.affiliates.forEach(res => {
  		if(res.isChecked == true && res.CommisionPaid == 0){
  				idsArr.push(res.CommissionId)
  		}
  	})
  	if(idsArr.length){
  		this._userservice.setAffliateCommision(idsArr.join(",")).subscribe((res: any) => {				
				console.log('success');
     		window.location.reload();
			}, (err: any) => {
				console.log(err);
			})
  	}
  }


}