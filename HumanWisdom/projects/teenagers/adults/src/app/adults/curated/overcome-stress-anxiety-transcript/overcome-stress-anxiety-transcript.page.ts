import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-overcome-stress-anxiety-transcript',
  templateUrl: './overcome-stress-anxiety-transcript.page.html',
  styleUrls: ['./overcome-stress-anxiety-transcript.page.scss'],
})
export class OvercomeStressAnxietyTranscriptPage implements OnInit {

  constructor(private location:Location,  private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Stress Relief Tips for Improved Mental Health')
    this.meta.updateTag({ property: 'title', content: 'Stress Relief Tips for Improved Mental Health' })
    this.meta.updateTag({ property: 'description', content: 'Learn practical stress relief tips that can help improve your mental health and well-being.' })
    this.meta.updateTag({ property: 'keywords', content: 'Overcoming stress,Anxiety management,Stress relief,Mental health tips,Mindfulness practices,Stress reduction,Positive mindset,Mindfulness practices,Mental health tips' })

  }

  goBack(){
    this.location.back()
  }

}
