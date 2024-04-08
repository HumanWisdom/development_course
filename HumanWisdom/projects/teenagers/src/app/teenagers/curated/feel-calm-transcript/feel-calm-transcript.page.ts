import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'HumanWisdom-feel-calm-transcript',
  templateUrl: './feel-calm-transcript.page.html',
  styleUrls: ['./feel-calm-transcript.page.scss'],
})
export class FeelCalmTranscriptPage implements OnInit {

  constructor(private location:Location, private meta: Meta, private title: Title,
    private navigationService:NavigationService) { }

  ngOnInit() {
    this.title.setTitle('Ways to Deal with Sorrow and Loss')
    this.meta.updateTag({ property: 'title', content: 'Ways to Deal with Sorrow and Loss' })
    this.meta.updateTag({ property: 'description', content: 'Explore effective ways to deal with sorrow and overcome the grief of losing a loved one. Find healing after loss with these helpful tips for self-care and coping with death.' })
    this.meta.updateTag({ property: 'keywords', content: 'Support for grief,Healing after loss,Comfort for bereavement,Coping with death,Overcoming sadness,Ways to deal with sorrow,Self-care during grieving,Loss and recovery' })

   
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }
  }

}
