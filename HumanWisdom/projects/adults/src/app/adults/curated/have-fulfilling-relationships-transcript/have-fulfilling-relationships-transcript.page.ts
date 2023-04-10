import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-have-fulfilling-relationships-transcript',
  templateUrl: './have-fulfilling-relationships-transcript.page.html',
  styleUrls: ['./have-fulfilling-relationships-transcript.page.scss'],
})
export class HaveFulfillingRelationshipsTranscriptPage implements OnInit {

  constructor(private location:Location,  private meta: Meta, private title: Title) { }

  ngOnInit() {

    this.title.setTitle('Building Healthy Relationships')
    this.meta.updateTag({ property: 'title', content: 'Building Healthy Relationships' })
    this.meta.updateTag({ property: 'description', content: 'Learn how to build healthy, fulfilling relationships that last with these helpful tips.' })
    this.meta.updateTag({ property: 'keywords', content: 'Healthy Relationships,Building Trust in Relationships,Communication in Relationships,Overcoming Relationship Challenges,Developing Intimacy in Relationships,Nurturing Relationships,Maintaining Positive Relationships' })

  }

  goBack(){
    this.location.back()
  }

}
