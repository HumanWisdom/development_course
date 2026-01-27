import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audio-element',
  templateUrl: './audio-element.component.html',
  styleUrls: ['./audio-element.component.scss'],
})
export class AudioElementComponent {

  @Input() audioLink: string;
  @Output() sendAvDuration = new EventEmitter<string>();
  myAudio: any

  @ViewChild('audio') audio;

  // jquery audio player
  @ViewChild('playerContainer',{static:false})  
  public playerContainer:ElementRef
  // /jquery audio player

  
  getTime(){
    
    
    this.sendAvDuration.emit(JSON.parse(this.audio.audio.nativeElement.currentTime))
    
  }

}
