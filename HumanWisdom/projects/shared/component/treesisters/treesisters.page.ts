import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'HumanWisdom-treesisters',
  templateUrl: './treesisters.page.html',
})
export class TreesistersPage {
  isAdults: boolean = true;

  constructor(
    private readonly location: Location,
    private readonly ngNavigatorShareService: NgNavigatorShareService
  ) {
    this.isAdults = SharedService.ProgramId === ProgramType.Adults;
  }

  back() {
    this.location.back();
  }

  share() {
    this.ngNavigatorShareService
      .share({
        title: 'HappierMe Program',
        text: this.isAdults
          ? "Hey, checkout HappierMe's Tree planting program – https://happierme.app/adults/treesisters"
          : "Hey, checkout HappierMe's Tree planting program – https://happierme.app/teenagers/treesisters",
        url: this.isAdults
          ? 'https://happierme.app/adults/treesisters'
          : 'https://happierme.app/teenagers/treesisters',
      })
      .catch((error) => console.error(error));
  }
}
