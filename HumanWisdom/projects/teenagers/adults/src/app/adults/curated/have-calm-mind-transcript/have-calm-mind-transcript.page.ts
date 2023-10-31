import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-have-calm-mind-transcript',
  templateUrl: './have-calm-mind-transcript.page.html',
  styleUrls: ['./have-calm-mind-transcript.page.scss'],
})
export class HaveCalmMindTranscriptPage implements OnInit {

  constructor(private location:Location, private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Mindfulness Practices for a Calm Mind')
    this.meta.updateTag({ property: 'title', content: 'Mindfulness Practices for a Calm Mind' })
    this.meta.updateTag({ property: 'description', content: 'Learn effective mindfulness practices for calming the mind and reducing stress. Discover relaxation techniques and self-care tips for anxiety and mental clarity.' })
    this.meta.updateTag({ property: 'keywords', content: 'Mindfulness practices,Calming techniques,Mental clarity,Meditation for calmness,Stress-free living,Inner peace tips,Relaxation techniques' })


  }

  goBack(){
    this.location.back()
  }

}
