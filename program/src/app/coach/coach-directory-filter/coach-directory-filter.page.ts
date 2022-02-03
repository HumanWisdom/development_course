import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach-directory-filter',
  templateUrl: './coach-directory-filter.page.html',
  styleUrls: ['./coach-directory-filter.page.scss'],
})
export class CoachDirectoryFilterPage implements OnInit {
  filterForms: FormGroup;
  coachLanguage: any = [];
  stars: number[] = [1, 2, 3, 4, 5];
  minFees: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  maxFees: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  selectedValue: number = 0;
  public gender: string = "male";
  selectedLang: any = [];

  constructor(private apiService: CoachService, private fb: FormBuilder, private router: Router, private activa: ActivatedRoute) { }

  ngOnInit() {
    this.getCoachFilterLang();
    debugger
    const filterValues = window.history.state?.data?window.history.state.data.filterDatas: '';
    this.selectedValue = filterValues.Rating ? +filterValues.Rating : 0;
    this.selectedLang = filterValues.Language ? filterValues.Language : [];
    this.filterForms = this.fb.group({
      Gender: [filterValues.Gender ? filterValues.Gender : '', Validators.required],
      MinFees: [filterValues.Pref_FromHrs ? +filterValues.Pref_FromHrs : '', Validators.required],
      MaxFees: [filterValues.Pref_ToHrs ? +filterValues.Pref_ToHrs : '', Validators.required]
    })
  }

  callI(item: string) {
    debugger
    return this.selectedLang.indexOf(item) != -1;
  }
  getGender(value) {
    this.gender = value;
  }

  countStar(star) {
    this.selectedValue = star;
  }

  onApplyFilter(){
    const data = {
      "Pref_FromHrs":this.filterForms.value.MinFees,
      "Pref_ToHrs":this.filterForms.value.MaxFees,
      "Rating":this.selectedValue.toString(),
      "Gender":this.filterForms.value.Gender,
      "Language": this.selectedLang
    }
    this.apiService.getCoachFilters(data).subscribe((res: any) => {
        console.log('RESSSSSSSSSSSS', res)
        this.router.navigate(['coach/coach-customer-directory'], { state: { data: { isChecked: res, filterDatas:data, isFromDemos: true } } })
    })
  }

  resetForms() {
    this.filterForms.reset();
    this.selectedValue = 0;

  }

  goBack() {

  }

  onLang(e) {
    const val = e.target.innerText;
    if (this.selectedLang.indexOf(val) !== -1) {
      const index = this.selectedLang.indexOf(val);
      if (index > -1) {
        this.selectedLang.splice(index, 1); // 2nd parameter means remove one item only
      }
    } else {
      this.selectedLang.push(val);
    }
  }

  getCoachFilterLang() {
    this.apiService.getCoachFilterLang().subscribe(res => {
      this.coachLanguage = res?.LangFilter;
    }, error => {

    })
  }
}
