import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-how-can-i-a16',
  templateUrl: './how-can-i-a16.page.html',
  styleUrls: ['./how-can-i-a16.page.scss'],
})
export class HowCanIA16Page implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  
  audioLink='https://humanwisdoms3.s3.eu-west-2.amazonaws.com/find_answers/why_do_i/audio/1.1.mp3'


  constructor(private location: Location) { }

  ngOnInit() {
  }

  getclcickevent(event) 
  {
    if (event === 'enablepopup') 
    {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() 
  {
    this.location.back()
  }

}
