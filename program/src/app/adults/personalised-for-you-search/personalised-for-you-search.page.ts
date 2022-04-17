import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdultsService } from '../adults.service';

@Component({
  selector: 'app-personalised-for-you-search',
  templateUrl: './personalised-for-you-search.page.html',
  styleUrls: ['./personalised-for-you-search.page.scss'],
})
export class PersonalisedForYouSearchPage implements OnInit {
  personalisedforyou = []
  indList = []

  constructor(private route: Router, private aservice:AdultsService,) {
    if(localStorage.getItem('perapidata')) {
      let pers = JSON.parse(localStorage.getItem('perapidata'));
      this.personalisedforyou = pers;
      this.personalisedforyou.forEach((d) => {
        if(d['active']){
          this.indList.push(d['id'])
        }
      })
    }
   }

  ngOnInit() {
    
  }

  clickbtn(name, val = '', event, ind, id) {
    if(val === '') {
      this.route.navigate(['/adults/overcome-stress'])
    }else {
     let fill =  this.personalisedforyou.filter((d) => d['name'] === name);
     const index = this.indList.indexOf(id);
     if(fill[0]['active']) {
      if (index > -1) {
        this.indList.splice(index, 1);
      }
     }else {
       this.indList.push(id)
     }
     let reqpay = this.indList.join();
    this.aservice.postUserpreference(reqpay).subscribe((res) => {
        if(res) {
          fill[0]['active'] = fill[0]['active'] ? false : true;
          this.personalisedforyou.splice(ind, 1)
          if(fill[0]['active']) {
            this.personalisedforyou.unshift(fill[0])
          }else {
            this.personalisedforyou.push(fill[0])
          }
          this.indList = []
          this.personalisedforyou.forEach((d) => {
            if(d['active']){
              this.indList.push(d['id'])
            }
          })
          localStorage.setItem('perapidata', JSON.stringify(this.personalisedforyou));
        }
    })
      // event.preventDefault();
    }
  }

}
