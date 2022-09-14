import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-s75002',
  templateUrl: './s75002.page.html',
  styleUrls: ['./s75002.page.scss'],
})
export class S75002Page implements OnInit {
  
  enableintro = true;
  enableday1 = false;
  enableday2 = false;
  enableday3 = false;
  enableday4 = false;
  enableday5 = false;

  constructor() { }

  ngOnInit() {
  }

  getdayevent(event) {
    if(event === 'intro')
    {
      this.enableintro = true;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
    }
    else if(event === '1')
    {
      this.enableintro = false;
      this.enableday1 = true;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
    }
    else if(event === '2')
    {
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = true;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
    }
    else if(event === '3')
    {
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = true;
      this.enableday4 = false;
      this.enableday5 = false;
    }
    else if(event === '4')
    {
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = true;
      this.enableday5 = false;
    }
    else if(event === '5')
    {
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = true;
    }
  }
}
