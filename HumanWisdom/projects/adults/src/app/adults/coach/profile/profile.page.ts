import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  coachBio = [];
  id = '';

  constructor(private service: AdultsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCoachBio();
  }

  getCoachBio(){
    if(this.route.snapshot.paramMap.get('id')) {
      this.id = localStorage.getItem("coachId");
      this.service.GetCoachBio(this.id).subscribe(res=>
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
  }

  backRoute() {
    this.router.navigate(["/adults/coach"]);
  }

  contactCoach() {
    this.router.navigate(["/adults/coach/contact", this.id]);
  }
}
