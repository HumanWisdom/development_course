import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-submit-story',
  templateUrl: './submit-story.page.html',
  styleUrls: ['./submit-story.page.scss'],
})
export class SubmitStoryPage implements OnInit {

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
  }
  
  goBack(){
    this.location.back()
  }

}
