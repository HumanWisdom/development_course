import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'HumanWisdom-change-unhelpful-habits-transcript',
  templateUrl: './change-unhelpful-habits-transcript.page.html',
  styleUrls: ['./change-unhelpful-habits-transcript.page.scss'],
})
export class ChangeUnhelpfulHabitsTranscriptPage implements OnInit {

  constructor(private location:Location,private router:Router, private meta: Meta, private title: Title,private navigationService:NavigationService) { }

  ngOnInit() {
    this.title.setTitle('Change Unhelpful Habits: Transform Your Life with Positive Behavior Change')
    this.meta.updateTag({ property: 'title', content: 'Change Unhelpful Habits: Transform Your Life with Positive Behavior Change' })
    this.meta.updateTag({ property: 'description', content: 'Ready to overcome negative habits and transform your life? Discover effective strategies to break bad habits and develop healthy ones with our curated collection of self-improvement tips and mindset shift techniques.' })
    this.meta.updateTag({ property: 'keywords', content: 'Habit change,Breaking bad habits,Overcoming negative habits,Healthy habits,Positive behavior change,Self-improvement tips,Personal growth,Mindset shift' })

  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

}
