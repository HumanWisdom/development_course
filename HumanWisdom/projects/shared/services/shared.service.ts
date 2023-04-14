
  import { Injectable } from '@angular/core';
  import {ProgramType} from './../models/program-model';

   export class  SharedService {
    public static ProgramId:ProgramType=ProgramType.Adults;
    public static TeenagerBaseUrl:string='https://staging.humanwisdom.me/teenagers/#/';
    public static AdultsBaseUrl:string='https://humanwisdom.me/';
    
  constructor() {
  }
}