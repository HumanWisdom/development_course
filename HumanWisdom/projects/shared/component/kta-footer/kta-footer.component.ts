import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-kta-footer',
  templateUrl: './kta-footer.component.html',
  styleUrls: ['./kta-footer.component.scss'],
})
export class KtaFooterComponent implements OnInit {
  @Output() previousEmitter = new EventEmitter<string>();
  @Input() fbg: string;
  @Input() bg_cft: string;


  constructor() { }

  ngOnInit() {}
  prev(){
    this.previousEmitter.emit()

  }

}
