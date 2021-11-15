import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FrameworksService } from '../frameworks.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-affiliate-s01-a',
  templateUrl: './affiliate-s01-a.component.html',
  styleUrls: ['./affiliate-s01-a.component.css']
})

export class AffiliateS01AComponent implements OnInit {

	affiliates: any = [];
	getAffliateCommisionApiRes: any = [];
	affiliateParentData: FormGroup;
	searchedLevel: any = "";
	searchedPaymentStatus: any = "";
	searchedFromDate: any = "2020-01-01";
	searchedToDate: any = "2030-01-01";
	id: any = 0;
	resUserByID: any = [];
	affiliateName: any = "";




	constructor(
		public _frameworkService: FrameworksService,
		private route: ActivatedRoute
	) {
		this.intializeForm();
	}

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id');
		console.log(this.id);
		this.getUserByID(this.id);
		this.getAffliateCommision(this.id);
	}


	intializeForm(): void {
    this.affiliateParentData = new FormGroup({
      CouponCode: new FormControl({ value: null, disabled: true }),
      CouponPercent: new FormControl({ value: null, disabled: true }),
      PercentageSelf: new FormControl({ value: null, disabled: true }),
      Percent_Child: new FormControl({ value: null, disabled: true }),
      Percent_GrandChild: new FormControl({ value: null, disabled: true }),
      PayPalID: new FormControl({ value: null, disabled: false }),
      BankDetails: new FormControl({ value: null, disabled: false }),
    });
  }

  getAffliateCommision(id) {
		console.log("id1: ", id);
			this._frameworkService.getAffliateCommision(id).subscribe((res: any) => {
			this.affiliates = res;
			this.getAffliateCommisionApiRes = res;
			console.log("Ubed: ",this.affiliates);
		}, (err: any) => {
			console.log(err);
		})
	}



	getUserByID(id) {
		console.log("id2 : ", id);
		this._frameworkService.getUserByID(id).subscribe((res: any) => {
      if (res.length) {
        this.affiliateParentData.patchValue(res[0]);
        this.resUserByID = res[0];
        this.affiliateName = this.resUserByID.FName + " " + this.resUserByID.LName;
        console.log(this.resUserByID.FName + " " + this.resUserByID.LName);
      }
    }, (err: any) => {
      console.log(err);
    })
  }


	getAffliateCommisionById(id){
		console.log(id);
	}

	
  searchFilter(){

			this.affiliates=this.getAffliateCommisionApiRes.filter(res=>{

				var subDate = new Date(res.SubscrDate + ' 05:30:00');
				var subDateTime = subDate.getTime();

				var fromDate = new Date(this.searchedFromDate);
				var fromDateTime = fromDate.getTime();

				var toDate = new Date(this.searchedToDate);
				var toDateTime = toDate.getTime();
				console.log(subDateTime , fromDateTime , toDateTime);

				return (subDateTime >= fromDateTime && subDateTime <= toDateTime && res.Level.toLocaleLowerCase().match(this.searchedLevel.toLocaleLowerCase()) && res.CommisionPaid.match(this.searchedPaymentStatus))
			})
  }

  addUser() {
    if (this.affiliateParentData.invalid) {
      alert('Please fill all required values')
      return;
    }
    let value = this.affiliateParentData.getRawValue();
    this.resUserByID.PayPalID = value.PayPalID;
    this.resUserByID.BankDetails = value.BankDetails;
    this._frameworkService.addUser(this.resUserByID).subscribe((res: any) => {
      alert(`Affiliate Updated Successfully`);
      window.location.reload();
    }, (err: any) => {
    	alert(err.error.Message);
      console.log(err);
    })
  }
}