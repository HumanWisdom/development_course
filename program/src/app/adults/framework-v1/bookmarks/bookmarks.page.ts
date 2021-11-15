import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {
  public bookmarkList = [];
  public userName: string;
  public allkeys: any;
  public urlPath = 'https://www.humanwisdom.info/';
  // public urlPath = 'http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/';

  constructor(private service: AdultsService, private router: Router) {
    let userId = JSON.parse(localStorage.getItem("userId"))
    this.service.bookmark(userId).subscribe(res => {
      let modulename = [];
      let keys = [];
      res.forEach((s) => {
        let m = [];
        if(!(modulename.some((f) => f['ModuleName'] === s['ModuleName']))) {
          res.forEach((d) => {
            if(d['TPath'] !== '' && s['ModuleName'] === d['ModuleName']) {
              m.push(d)
              keys.push(s['ModuleName'])
            }
          })
          modulename = [...m, ...modulename]
        }
      })
      let dup = new Set([...keys])
      let arr = []
      new Set([...keys]).forEach((i) => {
          arr.push(i)
      })
      this.allkeys = arr
      let result = []
      dup.forEach((d) => {
        let subres = []
        modulename.forEach((h) => {
          if(d === h['ModuleName']) {
            subres.push(h)
          }
        })
        let obj = {}
        obj[d] = subres
        result.push(obj);
      })
      this.bookmarkList = result;
    }
    )

  }

  imgClick(item) {
    console.log(item)
   this.router.navigate(['/' + item['ModuleUrl'] + 's' + item['ScrNo']])
  }

  ngOnInit() {
  }

}
