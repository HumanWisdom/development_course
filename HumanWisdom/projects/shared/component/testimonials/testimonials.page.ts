import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { LogEventService } from "../../services/log-event.service";
import { ForumService } from '../../forum/forum.service';
import { SharedService } from '../../services/shared.service';
import { CommonService } from '../../services/common.service';
import { ProgramType } from '../../models/program-model';
import { Constant } from '../../services/constant';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage implements OnInit,OnDestroy {
  isAdults = false;
  divId :any;
  constructor(private location :Location,private meta: Meta, public logeventservice: LogEventService, private title: Title) { 
   this.divId = SharedService.getDataFromLocalStorage(Constant.TestimonialId);
   if(this.divId && this.divId !=null && this.divId!='' && this.divId!='null' ){
    this.scroll_to_Testimonial();
    this.isAdults = SharedService.isAdultProgram();
   }
  }

  ngOnInit() {
    this.logeventservice.logEvent('view_testimonials');
    this.title.setTitle('Inspiring Words: Our Testimonials on Mindfulness and Fulfillment')
    this.meta.updateTag({ property: 'title', content: 'Inspiring Words: Our Testimonials on Mindfulness and Fulfillment'})
    this.meta.updateTag({ property: 'description', content: 'Discover inspiring words and stories of transformation with our testimonials on mindfulness and fulfillment. Read about the impact that our community has had on the lives of others.' })
    this.meta.updateTag({ property: 'keywords', content: 'Wisdom testimonials,Personal growth testimonials,Self-improvement testimonials,Mindfulness testimonials,Inspirational testimonials,Motivational testimonials,Self-help testimonials,Life lessons testimonials,Positive mindset testimonials,Happiness testimonials,Success testimonials,Mental health testimonials,Emotional intelligence testimonials,Spiritual growth testimonials,Life coaching testimonials' })
  }

  goBack(){
    SharedService.setDataInLocalStorage(Constant.TestimonialId,Constant.EmptyString);
    this.location.back()
  }

  scroll_to_Testimonial(): void {
    setTimeout(() => {
      window.scrollTo({
        behavior: 'smooth',
        top:
          document.getElementById(this.divId).getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          120,
      })
    }, 700);
  }

 
  ngOnDestroy(): void {
    SharedService.setDataInLocalStorage(Constant.TestimonialId,Constant.EmptyString);
  }

}
