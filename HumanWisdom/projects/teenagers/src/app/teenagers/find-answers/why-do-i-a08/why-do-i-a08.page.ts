import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'app-why-do-i-a08',
  templateUrl: './why-do-i-a08.page.html',
  styleUrls: ['./why-do-i-a08.page.scss'],
})
export class WhyDoIA08Page implements OnInit {

  isAdults = false;

  @ViewChild('enablepopup') enablepopup: ElementRef;
  
  audioLink='https://humanwisdoms3.s3.eu-west-2.amazonaws.com/find_answers/why_do_i/audio/1.1.mp3'


  constructor(private location: Location,private router:Router,private navigationService:NavigationService) { }

  ngOnInit() {
     this.setAudioControlsBackground();
  }

  getclcickevent(event) 
  {
    if (event === 'enablepopup') 
    {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

  setAudioControlsBackground() {
    const backgroundColor ='#0C2B5F';
  
    // Create a new <style> element
    const style = document.createElement('style');
    style.textContent = `
      audio::-webkit-media-controls-enclosure {
        background: ${backgroundColor} !important;
      }
    `;
  
    // Append the <style> element to the document head
    document.head.appendChild(style);
  }
}
