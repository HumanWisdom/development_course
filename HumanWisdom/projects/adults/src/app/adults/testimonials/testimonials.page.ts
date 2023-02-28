import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage implements OnInit {

  constructor(private location :Location,private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Inspiring Words: Our Testimonials on Mindfulness and Fulfillment')
    this.meta.updateTag({ property: 'title', content: 'Inspiring Words: Our Testimonials on Mindfulness and Fulfillment'})
    this.meta.updateTag({ property: 'description', content: 'Discover inspiring words and stories of transformation with our testimonials on mindfulness and fulfillment. Read about the impact that our community has had on the lives of others.' })
    this.meta.updateTag({ property: 'keywords', content: 'Wisdom testimonials,Personal growth testimonials,Self-improvement testimonials,Mindfulness testimonials,Inspirational testimonials,Motivational testimonials,Self-help testimonials,Life lessons testimonials,Positive mindset testimonials,Happiness testimonials,Success testimonials,Mental health testimonials,Emotional intelligence testimonials,Spiritual growth testimonials,Life coaching testimonials' })
  

  }

  goBack(){
    this.location.back()
  }


}
