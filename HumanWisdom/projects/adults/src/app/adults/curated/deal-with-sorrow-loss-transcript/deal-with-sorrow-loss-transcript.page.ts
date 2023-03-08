import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-deal-with-sorrow-loss-transcript',
  templateUrl: './deal-with-sorrow-loss-transcript.page.html',
  styleUrls: ['./deal-with-sorrow-loss-transcript.page.scss'],
})
export class DealWithSorrowLossTranscriptPage implements OnInit {

  constructor(private location:Location, private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Ways to Deal with Sorrow and Loss')
    this.meta.updateTag({ property: 'title', content: 'Ways to Deal with Sorrow and Loss' })
    this.meta.updateTag({ property: 'description', content: 'Explore effective ways to deal with sorrow and overcome the grief of losing a loved one. Find healing after loss with these helpful tips for self-care and coping with death.' })
    this.meta.updateTag({ property: 'keywords', content: 'Support for grief,Healing after loss,Comfort for bereavement,Coping with death,Overcoming sadness,Ways to deal with sorrow,Self-care during grieving,Loss and recovery' })

   
  }

  goBack(){
    this.location.back()
  }

}
