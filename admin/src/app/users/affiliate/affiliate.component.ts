import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.css']
})
export class AffiliateComponent implements OnInit {
  affiliates: any = [];
  parentAffiliates: any = [];
  affiliateForm: FormGroup;
  editUser: boolean;

  constructor(
    public _userService: UsersService
  ) {
    this.intializeForm();
  }

  ngOnInit() {
    this.getAllAffiliate();
    this.getParentAffiliates();
  }

  intializeForm(): void {
    this.affiliateForm = new FormGroup({
      CouponCode: new FormControl({ value: null, disabled: true }),
      RoleID: new FormControl({ value: 8, disabled: false }, [Validators.required]),
      Email: new FormControl({ value: null, disabled: false }, [Validators.required]),
      FName: new FormControl({ value: null, disabled: false }, [Validators.required]),
      LName: new FormControl({ value: null, disabled: false }, [Validators.required]),
      CouponPercent: new FormControl({ value: null, disabled: false }, [Validators.required]),
      PercentageSelf: new FormControl({ value: null, disabled: false }, [Validators.required]),
      Percent_Child: new FormControl({ value: null, disabled: false }, [Validators.required]),
      Percent_GrandChild: new FormControl({ value: null, disabled: false }, [Validators.required]),
      AffliateParentID: new FormControl({ value: null, disabled: false }, [Validators.required]),
      parentName: new FormControl({ value: null, disabled: true }, [Validators.required]),
      parentEmail: new FormControl({ value: null, disabled: true }, [Validators.required]),
      PayPalID: new FormControl({ value: null, disabled: false }),
      BankDetails: new FormControl({ value: null, disabled: false }),
    });
  }

  getAllAffiliate() {
    this._userService.getAllAffiliate().subscribe((res: any) => {
      this.affiliates = res;
      console.log(this.affiliates);
    }, (err: any) => {
      console.log(err);
    })
  }

  getParentAffiliates() {
    this._userService.getParentAffiliates().subscribe((res: any) => {
      this.parentAffiliates = res;
    }, (err: any) => {
      console.log(err);
    })
  }

  parentChange($event) {
    var findUser = this.parentAffiliates.filter(p => p.UserID == $event);
    if (findUser.length) {
      this.affiliateForm.patchValue({
        parentName: findUser[0].Name,
        parentEmail: findUser[0].Email
      })
    }
  }

  getUser(userID) {
    this._userService.getUserByID(userID).subscribe((res: any) => {
      if (res.length) {
        console.log(res);
        this.affiliateForm.patchValue(res[0])
        this.editUser = userID;
      }
    }, (err: any) => {
      console.log(err);
    })
  }

  addUser() {
    if (this.affiliateForm.invalid) {
      alert('Please fill all required values')
      return;
    }
    let value = this.affiliateForm.getRawValue()
    if (this.editUser) value.UserID = this.editUser
    this._userService.addUser(value).subscribe((res: any) => {
      alert(`Affiliate ${this.editUser ? 'Updated' : 'Added'}`);
      window.location.reload();
    }, (err: any) => {
      console.log(err);
      alert(err.error.Message);
    })
  }

}
