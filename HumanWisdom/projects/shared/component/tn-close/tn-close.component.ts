import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { SharedService } from "../../services/shared.service";
import { ProgramType } from "../../models/program-model";


@Component({
  selector: 'app-tn-close',
  templateUrl: './tn-close.component.html',
  styleUrls: ['./tn-close.component.scss'],
})
export class TnCloseComponent implements OnInit {

  constructor(private location:Location, private service: AdultsService,  private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    if (this.service.previousUrl !== '') {
      this.location.back()
    } else {
      if (SharedService.ProgramId == ProgramType.Teenagers) {
        this.router.navigate(['/teenager-dashboard'])
      }
      else{
      this.router.navigate(['/adults/adult-dashboard'])
      }
      this.router.navigate(['/adults/search'])
    }
  }

}
