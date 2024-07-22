import { Component, OnInit,Input,ViewChild,  ElementRef,AfterViewInit,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-audio-element',
  templateUrl: './audio-element.component.html',
  styleUrls: ['./audio-element.component.scss'],
})
export class AudioElementComponent implements OnInit {

  @Input() audioLink: string;
  @Output() sendAvDuration = new EventEmitter<string>();
  myAudio:any
  // @ViewChild('audio',{static:false})
  // public audio:ElementRef

  @ViewChild('audio') audio;

  constructor() { }

  ngOnInit() {
    
    
  }

  // jquery audio player
  @ViewChild('playerContainer',{static:false})  
  public playerContainer:ElementRef
  // /jquery audio player

  
  getTime(){
    
    
    this.sendAvDuration.emit(JSON.parse(this.audio.audio.nativeElement.currentTime))
    
  }

}
