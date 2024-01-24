import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hwp-search-bar',
  templateUrl: './hwp-search-bar.component.html',
  styleUrls: ['./hwp-search-bar.component.scss'],
})
export class HwpSearchBarComponent implements OnInit {
  @Input() searchinp:string='';
  @Output() textBoxEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

  getSearchResult(value){
    this.textBoxEvent.emit(value);
  }


    
  clearSearch(){
    setTimeout(() => {
    this.searchinp='';
    this.textBoxEvent.emit('');
    }, 40);
  }


}
