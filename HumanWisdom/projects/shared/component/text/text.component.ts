import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input() quote: string;
  @Input() author: string;

  constructor() { }

  ngOnInit() {
    
  }

}
