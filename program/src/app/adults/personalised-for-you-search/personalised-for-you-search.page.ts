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
  isloggedIn = false;
  
  constructor(private route: Router, private aservice:AdultsService,) {
    this.getUserPreference()
   }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    if(userid === 'T') {
      this.isloggedIn = true
    }
  }

  getUserPreference() {
    this.aservice.getUserpreference().subscribe((res) => {
       let perd = this.aservice.getperList();
       this.personalisedforyou = []
       this.indList = []
       if(res && res !== "") {
         let arr = res.split('').filter((d) => d !== ',');
         arr.forEach((d) => {
           perd.forEach((r) => {
             if(d === r['id']){
               r['active'] = true;
               this.personalisedforyou.push(r);
             }
           })
         })
         perd.forEach((r) => {
           let find = this.personalisedforyou.some((d) => d['name'] === r['name']);
           if(!find) {
            r['active'] = false;
            this.personalisedforyou.push(r);
           }
        })
        this.personalisedforyou.forEach((d) => {
          if(d['active']){
            this.indList.push(d['id'])
          }
        })
       }else {
        perd.forEach((r) => {
           r['active'] = false;
           this.personalisedforyou.push(r);
       })
       }
    })
  }


  clickbtn(name, val = '', event, ind, id) {
    if(val === '') {
      this.route.navigate(['/adults/overcome-stress'])
    }else {
     if(this.isloggedIn) {
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
     }else {
        window.alert('Please Login to use  this feature.')
     }
    }
  }

}
