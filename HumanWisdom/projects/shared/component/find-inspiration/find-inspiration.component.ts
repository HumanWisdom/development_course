import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';
import { LogEventService } from '../../services/log-event.service';
import { ProgramType } from '../../models/program-model';

@Component({
  selector: 'app-find-inspiration',
  templateUrl: './find-inspiration.component.html',
  styleUrls: ['./find-inspiration.component.scss'],
})
export class FindInspiration {
  isAdults: boolean = true;
  inspirationItemsRow1: any[] = [];
  inspirationItemsRow2: any[] = [];

  constructor(private readonly router: Router, public readonly logeventservice: LogEventService) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }

    // Row 1: Podcasts, Video Library, Feel better now, Self-awareness, Guided journaling, Events
    this.inspirationItemsRow1 = [
      {
        title: 'Podcasts',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/podcast.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/podcast_without_bg.svg',
        url: 'podcast'
      },
      {
        title: 'Video Library',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/video.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/short_video_without_bg.svg',
        url: 'wisdom-shorts'
      },
      {
        title: 'Feel better now',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/wellness.svg'
          : 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/fbn_like_teens.svg',
        url: 'feel-better-now'
      },
      {
        title: 'Self-awareness',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/guided_journey.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/guided_journey_without_bg.svg',
        url: this.isAdults ? 'curated/self-awareness' : 'curated/self-awareness'
      },
      {
        title: 'Guided journaling',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/guided.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/guided_without_bg.svg',
        url: 'journal'
      },
      {
        title: 'Events',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/events.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/events_without_bg.svg',
        url: 'events'
      }
    ];

    // Row 2: Microlearning, Audio meditation, Soundscapes, Life stories, Find answers, Blog
    this.inspirationItemsRow2 = [
      {
        title: 'Microlearning',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/micro_learning.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/microlearn_without_bg.svg',
        url: 'micro-learning'
      },
      {
        title: 'Audio meditation',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/audio_new.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/audioMeditation_without_bg.svg',
        url: 'audio-meditation'
      },
      {
        title: 'Soundscapes',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/soundscape1.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/SoundScapes_without_bg.svg',
        url: 'soundscapes'
      },
      {
        title: 'Life stories',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/life.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/story_without_bg.svg',
        url: 'wisdom-stories'
      },
      {
        title: 'Find answers',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/answer1.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/find_ans_wihout_bg.svg',
        url: 'find-answers/why-do-i'
      },
      {
        title: 'Blog',
        img: this.isAdults
          ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/blog.svg'
          : 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/blog_without_bg.svg',
        url: 'blogs'
      }
    ];
  }

  routeTo(item: any) {
    if (item === 'podcast') {
      this.logeventservice.logEvent('click_podcasts');
    } else if (item === 'blogs') {
      this.logeventservice.logEvent('click_blogs');
    } else if (item === 'journal') {
      this.logeventservice.logEvent('click_guidedJournaling');
    } else if (item === 'wisdom-shorts') {
      this.logeventservice.logEvent('click_shortvideos');
    } else if (item === 'audio-meditation') {
      this.logeventservice.logEvent('click_guidedmeditation');
    } else if (item === 'wisdom-stories') {
      this.logeventservice.logEvent('click_lifestories');
    } else if (item === 'find-answers/why-do-i') {
      this.logeventservice.logEvent('click_understandyourmind');
    } else if (item === 'soundscapes') {
      this.logeventservice.logEvent('click_soundscapes');
    } else if (item === 'events') {
      this.logeventservice.logEvent('click_pastevents');
    } else if (item === 'micro-learning') {
      this.logeventservice.logEvent('click_interactivemodules');
    } else if (item === 'feel-better-now') {
      this.logeventservice.logEvent('click_feelbetternow');
    } else if (item === 'curated/self-awareness') {
      this.logeventservice.logEvent('click_selfawareness');
    } else {
      this.logeventservice.logEvent('click_FI_' + item);
    }
    this.router.navigate([SharedService.getprogramName() + '/' + item]);
  }
}

