import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S0Page } from './s0/s0.page';  
import { S1Page } from './s1/s1.page';  
import { S2Page } from './s2/s2.page';  
import { S3Page } from './s3/s3.page';  
import { S4Page } from './s4/s4.page';  
import { S5Page } from './s5/s5.page';  
import { S5tPage } from './s5t/s5t.page';  
import { S6Page } from './s6/s6.page';  
import { S7Page } from './s7/s7.page';  
import { S7tPage } from './s7t/s7t.page';  
import { S8Page } from './s8/s8.page';  
import { S9Page } from './s9/s9.page';  
import { S9tPage } from './s9t/s9t.page';  
import { S10Page } from './s10/s10.page';  
import { S11Page } from './s11/s11.page';  
import { S12Page } from './s12/s12.page';  
import { S13Page } from './s13/s13.page';  
import { S14Page } from './s14/s14.page';  
import { S15Page } from './s15/s15.page';  
import { S16p1Page } from './s16p1/s16p1.page';  
import { S16p2Page } from './s16p2/s16p2.page';  
import { S17Page } from './s17/s17.page';  
import { S18Page } from './s18/s18.page';  
import { S19Page } from './s19/s19.page';  
import { S19tPage } from './s19t/s19t.page';  
import { S20Page } from './s20/s20.page';  
import { S21Page } from './s21/s21.page';  
import { S22Page } from './s22/s22.page';
import { S22tPage } from './s22t/s22t.page'; 
import { S23Page } from './s23/s23.page';     
import { S24Page } from './s24/s24.page';  
import { S25Page } from './s25/s25.page';  
import { S26Page } from './s26/s26.page';  
import { S27Page } from './s27/s27.page';  
import { S29Page } from './s29/s29.page';  
import { S30Page } from './s30/s30.page'; 
import { S31Page } from './s31/s31.page';   
import { S31tPage } from './s31t/s31t.page';  
import { S32Page } from './s32/s32.page';  
import { S33Page } from './s33/s33.page';  
import { S33tPage } from './s33t/s33t.page';  
import { S34Page } from './s34/s34.page';  
import { S35Page } from './s35/s35.page';  
import { S35tPage } from './s35t/s35t.page';  
import { S36Page } from './s36/s36.page';  
import { S37Page } from './s37/s37.page';  
import { S38Page } from './s38/s38.page';  
import { S39Page } from './s39/s39.page';  
import { S39tPage } from './s39t/s39t.page';  
import { S40Page } from './s40/s40.page';  
import { S41Page } from './s41/s41.page';  
import { S42Page } from './s42/s42.page';  
import { S43Page } from './s43/s43.page';  
import { S44Page } from './s44/s44.page';  
import { S44tPage } from './s44t/s44t.page';  
import { S45Page } from './s45/s45.page';  
import { S46Page } from './s46/s46.page';  
import { S47Page } from './s47/s47.page';  
import { S48Page } from './s48/s48.page';  
import { S48tPage } from './s48t/s48t.page';  
import { S49Page } from './s49/s49.page';  
import { S50Page } from './s50/s50.page';  
import { S51Page } from './s51/s51.page';  
import { S52p1Page } from './s52p1/s52p1.page';  
import { S52p2Page } from './s52p2/s52p2.page';  
import { S53Page } from './s53/s53.page';  
import { S54Page } from './s54/s54.page';  
import { S54tPage } from './s54t/s54t.page';  
import { S55Page } from './s55/s55.page';  
import { S56Page } from './s56/s56.page';  
import { S57Page } from './s57/s57.page';  
import { S58Page } from './s58/s58.page';  
import { S59Page } from './s59/s59.page';  
import { S60Page } from './s60/s60.page';  
import { S61Page } from './s61/s61.page';  
import { S62Page } from './s62/s62.page';  
import { S62tPage } from './s62t/s62t.page';  
import { S63Page } from './s63/s63.page';  
import { S64Page } from './s64/s64.page';  
import { S65Page } from './s65/s65.page';  
import { S66Page } from './s66/s66.page';  
import { S67Page } from './s67/s67.page';  
import { S68Page } from './s68/s68.page';  
import { S69p1Page } from './s69p1/s69p1.page';  
import { S69p2Page } from './s69p2/s69p2.page';  
import { S70Page } from './s70/s70.page';  
import { S71Page } from './s71/s71.page';  
import { S71tPage } from './s71t/s71t.page';  
import { S72Page } from './s72/s72.page';  
import { S73Page } from './s73/s73.page';  
import { S73tPage } from './s73t/s73t.page';  
import { S74Page } from './s74/s74.page';  
import { S75Page } from './s75/s75.page';  
import { S76Page } from './s76/s76.page';  
import { S77Page } from './s77/s77.page';  
import { S78Page } from './s78/s78.page';  
import { S79Page } from './s79/s79.page';  
import { S80Page } from './s80/s80.page';  
import { S81Page } from './s81/s81.page';  
import { S82p1Page } from './s82p1/s82p1.page';  
import { S82p2Page } from './s82p2/s82p2.page';  
import { S83Page } from './s83/s83.page';  
import { S84Page } from './s84/s84.page';  
import { S84tPage } from './s84t/s84t.page';  
import { S85Page } from './s85/s85.page';  
import { S86Page } from './s86/s86.page';  
import { S87Page } from './s87/s87.page';  
import { S88Page } from './s88/s88.page';  
import { S89Page } from './s89/s89.page';  
import { S90Page } from './s90/s90.page';  
import { S91Page } from './s91/s91.page';  
import { S92p1Page } from './s92p1/s92p1.page';  
import { S92p2Page } from './s92p2/s92p2.page';  
import { S93Page } from './s93/s93.page';  
import { S94Page } from './s94/s94.page';  
import { S94tPage } from './s94t/s94t.page';  
import { S95Page } from './s95/s95.page';  
import { S96Page } from './s96/s96.page';  
import { S96tPage } from './s96t/s96t.page';  
import { S97Page } from './s97/s97.page';  
import { S98Page } from './s98/s98.page';  
import { S98tPage } from './s98t/s98t.page';  
import { S99Page } from './s99/s99.page';  
import { S100Page } from './s100/s100.page';  
import { S101Page } from './s101/s101.page';  
import { S102Page } from './s102/s102.page';  
import { S103Page } from './s103/s103.page';  
import { S103tPage } from './s103t/s103t.page';  
import { S104Page } from './s104/s104.page';  
import { S104tPage } from './s104t/s104t.page';  
import { S105Page } from './s105/s105.page';  
import { S106Page } from './s106/s106.page';  
import { S107Page } from './s107/s107.page';  
import { S108Page } from './s108/s108.page';  
import { S109Page } from './s109/s109.page';  
import { S110Page } from './s110/s110.page';
import { S110tPage } from './s110t/s110t.page';   
import { S111Page } from './s111/s111.page';  
import { S112Page } from './s112/s112.page';  
import { S113Page } from './s113/s113.page';  
import { S113tPage } from './s113t/s113t.page';  
import { S114Page } from './s114/s114.page';  
import { S115Page } from './s115/s115.page';  
import { S115tPage } from './s115t/s115t.page';  
import { S116Page } from './s116/s116.page';  
import { S117Page } from './s117/s117.page';  
import { S118Page } from './s118/s118.page';  
import { S119p1Page } from './s119p1/s119p1.page';  
import { S119p2Page } from './s119p2/s119p2.page';  
import { S120Page } from './s120/s120.page';  
import { S121Page } from './s121/s121.page';  
import { S122Page } from './s122/s122.page';  
import { S122tPage } from './s122t/s122t.page';  
import { S123Page } from './s123/s123.page';  
import { S124Page } from './s124/s124.page';  
import { S125Page } from './s125/s125.page';  
import { S125tPage } from './s125t/s125t.page';  
import { S126Page } from './s126/s126.page';  
import { S127Page } from './s127/s127.page';  
import { S128Page } from './s128/s128.page';  
import { S130Page } from './s130/s130.page';  
import { S130tPage } from './s130t/s130t.page';  
import { S131Page } from './s131/s131.page';  
import { S132Page } from './s132/s132.page';  
import { S133Page } from './s133/s133.page';  
import { S134Page } from './s134/s134.page'; 
import { S134tPage } from './s134t/s134t.page';  
import { S135Page } from './s135/s135.page';  
import { S136Page } from './s136/s136.page';  
import { S137Page } from './s137/s137.page';  
import { S138Page } from './s138/s138.page';  
import { S139p1Page } from './s139p1/s139p1.page';  
import { S139p2Page } from './s139p2/s139p2.page';  
import { S140Page } from './s140/s140.page';  
import { S141Page } from './s141/s141.page';  
import { S142Page } from './s142/s142.page';  
import { S143Page } from './s143/s143.page';  
import { S144Page } from './s144/s144.page';  
import { S145Page } from './s145/s145.page';  
import { S146Page } from './s146/s146.page';  
import { S147Page } from './s147/s147.page';  
import { S148Page } from './s148/s148.page';  
import { S149Page } from './s149/s149.page';  
import { S150Page } from './s150/s150.page';  
import { S151Page } from './s151/s151.page';  
import { S152p1Page } from './s152p1/s152p1.page';  
import { S152p2Page } from './s152p2/s152p2.page';  
import { S153Page } from './s153/s153.page';  
import { S154Page } from './s154/s154.page';  
import { S154tPage } from './s154t/s154t.page';  
import { S155Page } from './s155/s155.page';  
import { S156Page } from './s156/s156.page';  
import { S157Page } from './s157/s157.page';  
import { S158Page } from './s158/s158.page';  
import { S159Page } from './s159/s159.page';  
import { S160Page } from './s160/s160.page';  
import { S160p1Page } from './s160p1/s160p1.page';  
import { S160p2Page } from './s160p2/s160p2.page';  
import { S160p3Page } from './s160p3/s160p3.page';  
import { S161p1Page } from './s161p1/s161p1.page';  
import { S161p2Page } from './s161p2/s161p2.page';  

import { ComparisonRoutingModule } from './comparison-routing.module';

@NgModule({
  declarations: [
    S0Page,
    S1Page,
    S2Page,
    S3Page,
    S4Page,
    S5Page,
    S5tPage,
    S6Page,
    S7Page,
    S7tPage,
    S8Page,
    S9Page,
    S9tPage,
    S10Page,
    S10Page,
    S11Page,
    S12Page,
    S13Page,
    S14Page,
    S15Page,
    S16p1Page,
    S16p2Page,
    S17Page,
    S18Page,
    S19Page,
    S19tPage,
    S20Page,
    S21Page,
    S22Page,
    S22tPage,
    S23Page,
    S24Page,
    S25Page,
    S26Page,
    S27Page,
    S29Page,
    S30Page,
    S31Page,
    S31tPage,
    S32Page,
    S33Page,
    S33tPage,
    S34Page,
    S35Page,
    S35tPage,
    S36Page,
    S37Page,
    S38Page,
    S39Page,
    S39tPage,
    S40Page,
    S41Page,
    S42Page,
    S43Page,
    S44Page,
    S44tPage,
    S45Page,
    S46Page,
    S47Page,
    S48Page,
    S48tPage,
    S49Page,
    S50Page,
    S51Page,
    S52p1Page,
    S52p2Page,
    S53Page,
    S54Page,
    S54tPage,
    S55Page,
    S56Page,
    S57Page,
    S58Page,
    S59Page,
    S60Page,
    S61Page,
    S62Page,
    S62tPage,
    S63Page,
    S64Page,
    S65Page,
    S66Page,
    S67Page,
    S68Page,
    S69p1Page,
    S69p2Page,
    S70Page,
    S71Page,
    S71tPage,
    S72Page,
    S73Page,
    S73tPage,
    S74Page,
    S75Page,
    S76Page,
    S77Page,
    S78Page,
    S79Page,
    S80Page,
    S81Page,
    S82p1Page,
    S82p2Page,
    S83Page,
    S84Page,
    S84tPage,
    S85Page,
    S86Page,
    S87Page,
    S88Page,
    S89Page,
    S90Page,
    S91Page,
    S92p1Page,
    S92p2Page,
    S93Page,
    S94Page,
    S94tPage,
    S95Page,
    S96Page,
    S96tPage,
    S97Page,
    S98Page,
    S98tPage,
    S99Page,
    S100Page,
    S101Page,
    S102Page,
    S103Page,
    S103tPage,
    S104Page,
    S104tPage,
    S105Page,
    S106Page,
    S107Page,
    S108Page,
    S109Page,
    S110Page,
    S110tPage,
    S111Page,
    S112Page,
    S113Page,
    S113tPage,
    S114Page,
    S115Page,
    S115tPage,
    S116Page,
    S117Page,
    S118Page,
    S119p1Page,
    S119p2Page,
    S120Page,
    S121Page,
    S122Page,
    S122tPage,
    S123Page,
    S124Page,
    S125Page,
    S125tPage,
    S126Page,
    S127Page,
    S128Page,
    S130Page,
    S130tPage,
    S131Page,
    S132Page,
    S133Page,
    S134Page,
    S134tPage,
    S135Page,
    S136Page,
    S137Page,
    S138Page,
    S139p1Page,
    S139p2Page,
    S140Page,
    S141Page,
    S142Page,
    S143Page,
    S144Page,
    S145Page,
    S146Page,
    S147Page,
    S148Page,
    S149Page,
    S150Page,
    S151Page,
    S152p1Page,
    S152p2Page,
    S153Page,
    S154Page,
    S154tPage,
    S155Page,
    S156Page,
    S157Page,
    S158Page,
    S159Page,
    S160Page,
    S160p1Page,
    S160p2Page,
    S160p3Page,
    S161p1Page,
    S161p2Page,    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ComparisonRoutingModule,
    SharedModule
  ],
  providers:[
    AdultsService
  ]  
})
export class ComparisonModule { }
