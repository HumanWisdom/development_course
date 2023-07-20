import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-be-happier-transcript',
  templateUrl: './be-happier-transcript.page.html',
  styleUrls: ['./be-happier-transcript.page.scss'],
})
export class BeHappierTranscriptPage implements OnInit {

  constructor(private location:Location,private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Tips for Happiness: How to Live a Happier Life')
    this.meta.updateTag({ property: 'title', content: 'Tips for Happiness: How to Live a Happier Life' })
    this.meta.updateTag({ property: 'description', content: 'Discover simple, practical tips for living a happier life and find joy in everyday moments.' })
    this.meta.updateTag({ property: 'keywords', content: 'Tips for Happiness,Developing a Positive Mindset,Practices for Happiness,Overcoming Negativity,Building Resilience,Mindfulness for Happiness,Increasing Joy and Fulfillment,Pursuing Happiness,Finding Happiness in Life' })

  }

  goBack(){
    this.location.back()
  }

}
