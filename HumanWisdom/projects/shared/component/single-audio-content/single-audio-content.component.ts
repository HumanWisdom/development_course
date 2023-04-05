import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'HumanWisdom-single-audio-content',
  templateUrl: './single-audio-content.component.html',
  styleUrls: ['./single-audio-content.component.scss'],
})
export class SingleAudioContentComponent implements OnInit {
  yellow="#FFC455"
  @Input() audioLink=""
  @Input() audioTitle = ''
  @Input() rowId
 

  constructor(private route: ActivatedRoute, private router: Router) {
    this.audioLink = this.route.snapshot.paramMap.get('audiolink')
    this.audioTitle = this.route.snapshot.paramMap.get('title')
    this.rowId = Number( this.route.snapshot.paramMap.get('RowId'))

    let sub: any = localStorage.getItem("Subscriber")
     

    if(sub==0  && this.rowId >= 4)
     this.router.navigate(['/onboarding/free-limit']);

   }

  ngOnInit() {

  

  }

}
