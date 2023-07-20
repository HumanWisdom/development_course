import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-manage-your-emotions-transcript',
  templateUrl: './manage-your-emotions-transcript.page.html',
  styleUrls: ['./manage-your-emotions-transcript.page.scss'],
})
export class ManageYourEmotionsTranscriptPage implements OnInit {

  constructor(private location:Location, private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Managing Emotions with Mindfulness & Positive Psychology')
    this.meta.updateTag({ property: 'title', content: 'Managing Emotions with Mindfulness & Positive Psychology' })
    this.meta.updateTag({ property: 'description', content: 'Gain mastery over your emotions with our expert-guided coping strategies for anger management, stress management, and mood regulation. Learn how to practice emotional self-regulation and self-awareness techniques that promote mindfulness and positive psychology.' })
    this.meta.updateTag({ property: 'keywords', content: 'Emotional intelligence,Coping with emotions,Anger management,Emotional self-regulation,Self-awareness techniques,Mindfulness practices,Positive psychology,Mood regulation,Anger management,Self-control techniques,Stress management' })

  }

  goBack(){
    this.location.back()
  }

}
