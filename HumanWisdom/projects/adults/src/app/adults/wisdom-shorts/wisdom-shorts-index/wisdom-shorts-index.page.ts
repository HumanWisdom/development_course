import { Platform } from "@angular/cdk/platform";
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from './../../adults.service';


@Component({
  selector: 'HumanWisdom-wisdom-shorts-index',
  templateUrl: './wisdom-shorts-index.page.html',
  styleUrls: ['./wisdom-shorts-index.page.scss'],
})
export class WisdomShortsIndexPage implements OnInit {

  tocImage = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/wisdom_shorts.png"
  tocColor = "white"

  path: string;
  address: string;
  wisdomshorts = [];

  constructor(private ngNavigatorShareService: NgNavigatorShareService, public platform: Platform, private router: Router,
    private location: Location, private service: AdultsService, private meta: Meta, private title: Title) {
    this.ngNavigatorShareService = ngNavigatorShareService;
    this.address = this.router.url
    this.getwisdomshorts()
  }

  ngOnInit() {
    this.title.setTitle('Inspiring Shorts for Adults')
    this.meta.updateTag({ property: 'title', content: 'Inspiring Shorts for Adults' })
    this.meta.updateTag({ property: 'description', content: 'Our inspirational shorts are perfect for busy adults who want to grow and improve but don\'t have a lot of time to spare. Discover practical life tips and empowering quotes that can help you achieve your goals.' })
    this.meta.updateTag({ property: 'keywords', content: 'Everyday inspiration,Relatable wisdom,Practical life tips,Quick life hacks,Positive life lessons,Empowering quotes,Self-help wisdom,Encouraging words,Friendly life guidance' })

  }

  getwisdomshorts() {
    this.service.GetWisdomShorts().subscribe((res) => {
      if (res) {
        // this.wisdomshorts = res;
        let res1 = new Array()
        res1 = res.filter(p => p.display === "1")

        res1.forEach(element => {
          res.splice(res.indexOf(element), 1)
          res.unshift(element)
        });

        this.wisdomshorts = res;


      }
    })
  }

  goBack() {
    this.location.back()
  }
  share() {
    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)  ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */
    console.log("url")
    this.path = "https://humanwisdom.me" + this.address;
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.path
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  wisdoshortsevent(val, video, title) {
    localStorage.setItem('wisdomvideotitle', title);
    let loggedin = localStorage.getItem("isloggedin")
    let sub: any = localStorage.getItem("Subscriber")
    let id = video.split("/")[3].split(".")[1]
    this.service.CheckShortsIsFree(id).subscribe(res => {
      if (res === true) {
        this.router.navigate([video])
      } else {
        if(loggedin && loggedin === 'T' && sub && sub === '1') {
          this.router.navigate([video])
        }else {
          this.router.navigate(['/onboarding/free-limit'])
        }
      }
    })
  }
}
