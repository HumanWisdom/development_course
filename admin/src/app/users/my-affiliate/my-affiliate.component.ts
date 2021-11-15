import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-affiliate',
  templateUrl: './my-affiliate.component.html',
  styleUrls: ['./my-affiliate.component.css']
})

export class MyAffiliateComponent implements OnInit {

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
		this.getAffliateReferralReport(this.id);
	}


	intializeForm(): void {
    
  }

  getAffliateReferralReport(id) {
			this._userservice.getAffliateReferralReport(id).subscribe((res: any) => {
			this.affiliates = res;
			this.getAffliateCommisionApiRes = res;
			// this.affiliates.map((element) => {
			// 	element.isChecked = false;
			// 	if(element.CommisionPaid == 0){
			// 		this.allCheck = 1;
			// 	}
			// 	this.SubscrAmountTotal = this.SubscrAmountTotal + parseFloat(element.Amount);
			// 	this.CommEarnedTotal = this.CommEarnedTotal + parseFloat(element.CommisionEarned);

			// });
		}, (err: any) => {
			console.log(err);
		})
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
				return res.Level.toLocaleLowerCase().match(this.searchedLevel.toLocaleLowerCase())
			});
			this.affiliates.forEach(res => {
				this.SubscrAmountTotal = this.SubscrAmountTotal + parseFloat(res.Amount);
				this.CommEarnedTotal = this.CommEarnedTotal + parseFloat(res.CommisionEarned);
			});
  }
}