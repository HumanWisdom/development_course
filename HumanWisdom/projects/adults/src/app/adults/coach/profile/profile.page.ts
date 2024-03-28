import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  coachBio = [];

  constructor(private service: AdultsService, private router: Router) { }

  ngOnInit() {
    this.getCoachBio();
  }

  getCoachBio(){
    let id = localStorage.getItem("coachId");
    this.service.GetCoachBio(id).subscribe(res=>
      {
        console.log(res);
        if(res) {
          this.coachBio = res;
        }
      },
      error=>console.log(error),
      ()=>{
      }
    )
  }

  backRoute() {
    this.router.navigate(["/adults/coach"]);
  }

  contactCoach() {
    this.router.navigate(["/adults/coach/contact"]);
  }
}
