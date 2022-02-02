import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selectedLang = [];

  constructor(private apiService: CoachService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getCoachFilterLang();
    this.filterForms = this.fb.group({
      Gender: ['', Validators.required],
      MinFees: ['', Validators.required],
      MaxFees: ['', Validators.required]
    })
  }

  getGender(value) {
    this.gender = value;
  }

  countStar(star) {
    this.selectedValue = star;
  }

  onApplyFilter(){
    const data = {
      "Pref_FromHrs":"10:00",
      "Pref_ToHrs":"10:30",
      "Rating":this.selectedValue.toString(),
      "Gender":this.filterForms.value.Gender,
      "Language": this.selectedLang
    }
    this.apiService.getCoachFilters(data).subscribe((res) => {
        console.log('RESSSSSSSSSSSS', res)
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
