import { Component, OnInit } from '@angular/core';
import { AdultsService } from '../../adults.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  coachList = [];

  constructor(private service: AdultsService, private router: Router) { }

  ngOnInit() {
    this.getAllCoachList();
  }

  getAllCoachList(){
    this.service.GetAllCoachList().subscribe(res=>
      {
        if(res) {
          this.coachList = res;
        }
      },
      error=>console.log(error),
      ()=>{
      }
    )
  }

  backRoute() {
    this.router.navigate(["/adults/adult-dashboard"]);
  }

  routeCoach(data) {
    localStorage.setItem("coachId", data['UserID']);
    this.router.navigate(["/adults/coach/profile", data['UserID']]);
  }

  contactCoach() {
    this.router.navigate(["/adults/coach/contact"]);
  }
}
