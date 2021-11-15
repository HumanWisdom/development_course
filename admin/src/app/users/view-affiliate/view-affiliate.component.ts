import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-view-affiliate',
  templateUrl: './view-affiliate.component.html',
  styleUrls: ['./view-affiliate.component.css']
})

export class ViewAffiliateComponent implements OnInit {

	affiliates: any = [];
	getAffliateListApiRes: any = [];
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
		private router: Router
	) {
		this.intializeForm();
	}

	ngOnInit() {
		//this.getUserByID(24);
		this.getAffliateList();
	}


	intializeForm(): void {
   
  }

  getAffliateList() {
			this._userservice.getAffliateList().subscribe((res: any) => {
			this.affiliates = res;
			this.getAffliateListApiRes = res;
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
			this.affiliates=this.getAffliateListApiRes.filter(res=>{

				
				

				//res.FName.toLocaleLowerCase().match(this.searchedFirstName.toLocaleLowerCase())
				return res.AffName.toLocaleLowerCase().match(this.searchedName.toLocaleLowerCase())
			});
		
  }


  routeMyAffiliate(id){
    this.router.navigate([`users/my-affiliate/${id}`])
  }

  routeRevenueAffiliate(id){
  	this.router.navigate([`users/affiliate-all-users/${id}`])
  }

}