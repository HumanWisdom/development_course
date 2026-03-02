import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hwp-search-bar',
  templateUrl: './hwp-search-bar.component.html',
  styleUrls: ['./hwp-search-bar.component.scss'],
})
export class HwpSearchBarComponent {
  @Input() searchinp:string='';
  @Output() textBoxEvent = new EventEmitter<string>();
  @Input() placeholder = 'Search for a topic';


  getSearchResult(value: string) {
    this.textBoxEvent.emit(value);
  }


    
  clearSearch(){
    this.searchinp='';
    this.textBoxEvent.emit('');
  }


}
