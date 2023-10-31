import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

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

const routes: Routes = [ 
  {
    path: '',   
    component: S0Page,
  },
  
  {
    path: 's0',   
    component: S0Page,
  },
  {
    path: 's1',   
    canActivate:[ActiveGuard],  
    component: S1Page,
  },
  {
    path: 's2',   
    canActivate:[ActiveGuard],  
    component: S2Page,
  },
  {
    path: 's3',   
    canActivate:[ActiveGuard],  
    component: S3Page,
  },
  {
    path: 's4',   
    canActivate:[ActiveGuard],  
    component: S4Page,
  },
  {
    path: 's5',   
    canActivate:[ActiveGuard],  
    component: S5Page,
  },
  {
    path: 's5t',   
    canActivate:[ActiveGuard],  
    component: S5tPage,
  },
  {
    path: 's6',   
    canActivate:[ActiveGuard],  
    component: S6Page,
  },
  {
    path: 's7',   
    canActivate:[ActiveGuard],  
    component: S7Page,
  },
  {
    path: 's7t',   
    canActivate:[ActiveGuard],  
    component: S7tPage,
  },
  {
    path: 's8',   
    canActivate:[ActiveGuard],  
    component: S8Page,
  },
  {
    path: 's9',   
    canActivate:[ActiveGuard],  
    component: S9Page,
  },
  {
    path: 's9t',   
    canActivate:[ActiveGuard],  
    component: S9tPage,
  },
  {
    path: 's10',   
    canActivate:[ActiveGuard],  
    component: S10Page,
  },
  {
    path: 's11',   
    canActivate:[ActiveGuard],  
    component: S11Page,
  },
  {
    path: 's12',   
    canActivate:[ActiveGuard],  
    component: S12Page,
  },
  {
    path: 's13',   
    canActivate:[ActiveGuard],  
    component: S13Page,
  },
  {
    path: 's14',   
    canActivate:[ActiveGuard],  
    component: S14Page,
  },
  
  {
    path: 's15',   
    canActivate:[ActiveGuard],  
    component: S15Page,
  },
  {
    path: 's16p1',   
    canActivate:[ActiveGuard],  
    component: S16p1Page,
  },
  {
    path: 's16p2',   
    canActivate:[ActiveGuard],  
    component: S16p2Page,
  },
  {
    path: 's17',   
    canActivate:[ActiveGuard],  
    component: S17Page,
  },
  {
    path: 's18',   
    canActivate:[ActiveGuard],  
    component: S18Page,
  },
  {
    path: 's19',   
    canActivate:[ActiveGuard],  
    component: S19Page,
  },
  {
    path: 's19t',   
    canActivate:[ActiveGuard],  
    component: S19tPage,
  },
  {
    path: 's20',   
    canActivate:[ActiveGuard],  
    component: S20Page,
  },
  {
    path: 's21',   
    canActivate:[ActiveGuard],  
    component: S21Page,
  },
  {
    path: 's22',   
    canActivate:[ActiveGuard],  
    component: S22Page,
  },
  {
    path: 's22t',   
    canActivate:[ActiveGuard],  
    component: S22tPage,
  },
  {
    path: 's23',   
    canActivate:[ActiveGuard],  
    component: S23Page,
  },
  {
    path: 's24',   
    canActivate:[ActiveGuard],  
    component: S24Page,
  },
  {
    path: 's25',   
    canActivate:[ActiveGuard],  
    component: S25Page,
  },
  {
    path: 's26',   
    canActivate:[ActiveGuard],  
    component: S26Page,
  },
  {
    path: 's27',   
    canActivate:[ActiveGuard],  
    component: S27Page,
  },
 
  {
    path: 's29',   
    canActivate:[ActiveGuard],  
    component: S29Page,
  },
  {
    path: 's30',   
    canActivate:[ActiveGuard],  
    component: S30Page,
  },
  {
    path: 's31',   
    canActivate:[ActiveGuard],  
    component: S31Page,
  },
  {
    path: 's31t',   
    canActivate:[ActiveGuard],  
    component: S31tPage,
  },
  {
    path: 's32',   
    canActivate:[ActiveGuard],  
    component: S32Page,
  },
  {
    path: 's33',   
    canActivate:[ActiveGuard],  
    component: S33Page,
  },
  {
    path: 's33t',   
    canActivate:[ActiveGuard],  
    component: S33tPage,
  },
  {
    path: 's34',   
    canActivate:[ActiveGuard],  
    component: S34Page,
  },
  
  {
    path: 's35',   
    canActivate:[ActiveGuard],  
    component: S35Page,
  },
  {
    path: 's35t',   
    canActivate:[ActiveGuard],  
    component: S35tPage,
  },
  {
    path: 's36',   
    canActivate:[ActiveGuard],  
    component: S36Page,
  },
  {
    path: 's37',   
    canActivate:[ActiveGuard],  
    component: S37Page,
  },
 
  {
    path: 's38',   
    canActivate:[ActiveGuard],  
    component: S38Page,
  },
 
  {
    path: 's39',   
    canActivate:[ActiveGuard],  
    component: S39Page,
  },
  {
    path: 's39t',   
    canActivate:[ActiveGuard],  
    component: S39tPage,
  },
  {
    path: 's40',   
    canActivate:[ActiveGuard],  
    component: S40Page,
  },
  {
    path: 's41',   
    canActivate:[ActiveGuard],  
    component: S41Page,
  },
  {
    path: 's42',   
    canActivate:[ActiveGuard],  
    component: S42Page,
  },
  {
    path: 's43',   
    canActivate:[ActiveGuard],  
    component: S43Page,
  },
  {
    path: 's44',   
    canActivate:[ActiveGuard],  
    component: S44Page,
  },
  {
    path: 's44t',   
    canActivate:[ActiveGuard],  
    component: S44tPage,
  },
  {
    path: 's45',   
    canActivate:[ActiveGuard],  
    component: S45Page,
  },
  {
    path: 's46',   
    canActivate:[ActiveGuard],  
    component: S46Page,
  },
  {
    path: 's47',   
    canActivate:[ActiveGuard],  
    component: S47Page,
  },
  
  {
    path: 's48',   
    canActivate:[ActiveGuard],  
    component: S48Page,
  },
  {
    path: 's48t',   
    canActivate:[ActiveGuard],  
    component: S48tPage,
  },
  {
    path: 's49',   
    canActivate:[ActiveGuard],  
    component: S49Page,
  },
  {
    path: 's50',   
    canActivate:[ActiveGuard],  
    component: S50Page,
  },
  {
    path: 's51',   
    canActivate:[ActiveGuard],  
    component: S51Page,
  },
  {
    path: 's52p1',   
    canActivate:[ActiveGuard],  
    component: S52p1Page,
  },
  {
    path: 's52p2',   
    canActivate:[ActiveGuard],  
    component: S52p2Page,
  },
  {
    path: 's53',   
    canActivate:[ActiveGuard],  
    component: S53Page,
  },
  {
    path: 's54',   
    canActivate:[ActiveGuard],  
    component: S54Page,
  },
  {
    path: 's54t',   
    canActivate:[ActiveGuard],  
    component: S54tPage,
  },
  {
    path: 's55',   
    canActivate:[ActiveGuard],  
    component: S55Page,
  },
  {
    path: 's56',   
    canActivate:[ActiveGuard],  
    component: S56Page,
  },
  {
    path: 's57',   
    canActivate:[ActiveGuard],  
    component: S57Page,
  },
  {
    path: 's58',   
    canActivate:[ActiveGuard],  
    component: S58Page,
  },
  {
    path: 's59',   
    canActivate:[ActiveGuard],  
    component: S59Page,
  },
  {
    path: 's60',   
    canActivate:[ActiveGuard],  
    component: S60Page,
  },
  {
    path: 's61',   
    canActivate:[ActiveGuard],  
    component: S61Page,
  },
  {
    path: 's62',   
    canActivate:[ActiveGuard],  
    component: S62Page,
  },
  {
    path: 's62t',   
    canActivate:[ActiveGuard],  
    component: S62tPage,
  },
  {
    path: 's63',   
    canActivate:[ActiveGuard],  
    component: S63Page,
  },
  {
    path: 's64',   
    canActivate:[ActiveGuard],  
    component: S64Page,
  },
  {
    path: 's65',   
    canActivate:[ActiveGuard],  
    component: S65Page,
  },
  {
    path: 's66',   
    canActivate:[ActiveGuard],  
    component: S66Page,
  },
  {
    path: 's67',   
    canActivate:[ActiveGuard],  
    component: S67Page,
  },
  {
    path: 's68',   
    canActivate:[ActiveGuard],  
    component: S68Page,
  },
  
  {
    path: 's69p1',   
    canActivate:[ActiveGuard],  
    component: S69p1Page,
  },
  {
    path: 's69p2',   
    canActivate:[ActiveGuard],  
    component: S69p2Page,
  },
  {
    path: 's70',   
    canActivate:[ActiveGuard],  
    component: S70Page,
  },
  {
    path: 's71',   
    canActivate:[ActiveGuard],  
    component: S71Page,
  },
  {
    path: 's71t',   
    canActivate:[ActiveGuard],  
    component: S71tPage,
  },
  {
    path: 's72',   
    canActivate:[ActiveGuard],  
    component: S72Page,
  },
  {
    path: 's73',   
    canActivate:[ActiveGuard],  
    component: S73Page,
  },
  {
    path: 's73t',   
    canActivate:[ActiveGuard],  
    component: S73tPage,
  },
  {
    path: 's74',   
    canActivate:[ActiveGuard],  
    component: S74Page,
  },
  {
    path: 's75',   
    canActivate:[ActiveGuard],  
    component: S75Page,
  },
  {
    path: 's76',   
    canActivate:[ActiveGuard],  
    component: S76Page,
  },
 
  {
    path: 's77',   
    canActivate:[ActiveGuard],  
    component: S77Page,
  },
  {
    path: 's78',   
    canActivate:[ActiveGuard],  
    component: S78Page,
  },
  {
    path: 's79',   
    canActivate:[ActiveGuard],  
    component: S79Page,
  },
  {
    path: 's80',   
    canActivate:[ActiveGuard],  
    component: S80Page,
  },
  
  {
    path: 's81',   
    canActivate:[ActiveGuard],  
    component: S81Page,
  },
  {
    path: 's82p1',   
    canActivate:[ActiveGuard],  
    component: S82p1Page,
  },
  {
    path: 's82p2',   
    canActivate:[ActiveGuard],  
    component: S82p2Page,
  },
  
  {
    path: 's83',   
    canActivate:[ActiveGuard],  
    component: S83Page,
  },
  {
    path: 's84',   
    canActivate:[ActiveGuard],  
    component: S84Page,
  },
  {
    path: 's84t',   
    canActivate:[ActiveGuard],  
    component: S84tPage,
  },
  {
    path: 's85',   
    canActivate:[ActiveGuard],  
    component: S85Page,
  },
 
  {
    path: 's86',   
    canActivate:[ActiveGuard],  
    component: S86Page,
  },
  {
    path: 's87',   
    canActivate:[ActiveGuard],  
    component: S87Page,
  },
  {
    path: 's88',   
    canActivate:[ActiveGuard],  
    component: S88Page,
  },
  {
    path: 's89',   
    canActivate:[ActiveGuard],  
    component: S89Page,
  },
  {
    path: 's90',   
    canActivate:[ActiveGuard],  
    component: S90Page,
  },
  {
    path: 's91',   
    canActivate:[ActiveGuard],  
    component: S91Page,
  },
  {
    path: 's92p1',   
    canActivate:[ActiveGuard],  
    component: S92p1Page,
  },
  {
    path: 's92p2',   
    canActivate:[ActiveGuard],  
    component: S92p2Page,
  },
  {
    path: 's93',   
    canActivate:[ActiveGuard],  
    component: S93Page,
  },
  {
    path: 's94',   
    canActivate:[ActiveGuard],  
    component: S94Page,
  },
  {
    path: 's94t',   
    canActivate:[ActiveGuard],  
    component: S94tPage,
  },
  {
    path: 's95',   
    canActivate:[ActiveGuard],  
    component: S95Page,
  },
  {
    path: 's96',   
    canActivate:[ActiveGuard],  
    component: S96Page,
  },
  {
    path: 's96t',   
    canActivate:[ActiveGuard],  
    component: S96tPage,
  },
  {
    path: 's97',   
    canActivate:[ActiveGuard],  
    component: S97Page,
  },
  {
    path: 's98',   
    canActivate:[ActiveGuard],  
    component: S98Page,
  },
  {
    path: 's98t',   
    canActivate:[ActiveGuard],  
    component: S98tPage,
  },
  {
    path: 's99',   
    canActivate:[ActiveGuard],  
    component: S99Page,
  },
 
  {
    path: 's100',   
    canActivate:[ActiveGuard],  
    component: S100Page,
  },
  
  {
    path: 's101',   
    canActivate:[ActiveGuard],  
    component: S101Page,
  },
  {
    path: 's102',   
    canActivate:[ActiveGuard],  
    component: S102Page,
  },
  {
    path: 's103',   
    canActivate:[ActiveGuard],  
    component: S103Page,
  },
  {
    path: 's103t',   
    canActivate:[ActiveGuard],  
    component: S103tPage,
  },
  {
    path: 's104',   
    canActivate:[ActiveGuard],  
    component: S104Page,
  },
  {
    path: 's104t',   
    canActivate:[ActiveGuard],  
    component: S104tPage,
  },
  {
    path: 's105',   
    canActivate:[ActiveGuard],  
    component: S105Page,
  },
  {
    path: 's106',   
    canActivate:[ActiveGuard],  
    component: S106Page,
  },
  {
    path: 's107',   
    canActivate:[ActiveGuard],  
    component: S107Page,
  },
 
  {
    path: 's108',   
    canActivate:[ActiveGuard],  
    component: S108Page,
  },
  {
    path: 's109',   
    canActivate:[ActiveGuard],  
    component: S109Page,
  },
  {
    path: 's110',   
    canActivate:[ActiveGuard],  
    component: S110Page,
  },
  {
    path: 's110t',   
    canActivate:[ActiveGuard],  
    component: S110tPage,
  },
  {
    path: 's111',   
    canActivate:[ActiveGuard],  
    component: S111Page,
  },
  {
    path: 's112',   
    canActivate:[ActiveGuard],  
    component: S112Page,
  },
  {
    path: 's113',   
    canActivate:[ActiveGuard],  
    component: S113Page,
  },
  {
    path: 's113t',   
    canActivate:[ActiveGuard],  
    component: S113tPage,
  },
  {
    path: 's114',   
    canActivate:[ActiveGuard],  
    component: S114Page,
  },
  
  {
    path: 's115',   
    canActivate:[ActiveGuard],  
    component: S115Page,
  },
  {
    path: 's115t',   
    canActivate:[ActiveGuard],  
    component: S115tPage,
  },
  {
    path: 's116',   
    canActivate:[ActiveGuard],  
    component: S116Page,
  },
  {
    path: 's117',   
    canActivate:[ActiveGuard],  
    component: S117Page,
  },
  {
    path: 's118',   
    canActivate:[ActiveGuard],  
    component: S118Page,
  },
  {
    path: 's119p1',   
    canActivate:[ActiveGuard],  
    component: S119p1Page,
  },
  {
    path: 's119p2',   
    canActivate:[ActiveGuard],  
    component: S119p2Page,
  },
  {
    path: 's120',   
    canActivate:[ActiveGuard],  
    component: S120Page,
  },
  {
    path: 's121',   
    canActivate:[ActiveGuard],  
    component: S121Page,
  },
 
  {
    path: 's122',   
    canActivate:[ActiveGuard],  
    component: S122Page,
  },
  {
    path: 's122t',   
    canActivate:[ActiveGuard],  
    component: S122tPage,
  },
  {
    path: 's123',   
    canActivate:[ActiveGuard],  
    component: S123Page,
  },
  {
    path: 's124',   
    canActivate:[ActiveGuard],  
    component: S124Page,
  },
 
  {
    path: 's125',   
    canActivate:[ActiveGuard],  
    component: S125Page,
  },
  {
    path: 's125t',   
    canActivate:[ActiveGuard],  
    component: S125tPage,
  },
  {
    path: 's126',   
    canActivate:[ActiveGuard],  
    component: S126Page,
  },
  {
    path: 's127',   
    canActivate:[ActiveGuard],  
    component: S127Page,
  },
  {
    path: 's128',   
    canActivate:[ActiveGuard],  
    component: S128Page,
  },
 
  {
    path: 's130',   
    canActivate:[ActiveGuard],  
    component: S130Page,
  },
  {
    path: 's130t',   
    canActivate:[ActiveGuard],  
    component: S130tPage,
  },
  {
    path: 's131',   
    canActivate:[ActiveGuard],  
    component: S131Page,
  },
  {
    path: 's132',   
    canActivate:[ActiveGuard],  
    component: S132Page,
  },
  {
    path: 's133',   
    canActivate:[ActiveGuard],  
    component: S133Page,
  },
 
  {
    path: 's134',   
    canActivate:[ActiveGuard],  
    component: S134Page,
  },
  {
    path: 's134t',   
    canActivate:[ActiveGuard],  
    component: S134tPage,
  },
  
  {
    path: 's135',   
    canActivate:[ActiveGuard],  
    component: S135Page,
  },
  {
    path: 's136',   
    canActivate:[ActiveGuard],  
    component: S136Page,
  },
  {
    path: 's137',   
    canActivate:[ActiveGuard],  
    component: S137Page,
  },
  {
    path: 's138',   
    canActivate:[ActiveGuard],  
    component: S138Page,
  },
  {
    path: 's139p1',   
    canActivate:[ActiveGuard],  
    component: S139p1Page,
  },
  {
    path: 's139p2',   
    canActivate:[ActiveGuard],  
    component: S139p2Page,
  },
  {
    path: 's140',   
    canActivate:[ActiveGuard],  
    component: S140Page,
  },
 
  {
    path: 's141',   
    canActivate:[ActiveGuard],  
    component: S141Page,
  },
  {
    path: 's142',   
    canActivate:[ActiveGuard],  
    component: S142Page,
  },
  {
    path: 's143',   
    canActivate:[ActiveGuard],  
    component: S143Page,
  },
 
  {
    path: 's144',   
    canActivate:[ActiveGuard],  
    component: S144Page,
  },
  {
    path: 's145',   
    canActivate:[ActiveGuard],  
    component: S145Page,
  },
  {
    path: 's146',   
    canActivate:[ActiveGuard],  
    component: S146Page,
  },
  {
    path: 's147',   
    canActivate:[ActiveGuard],  
    component: S147Page,
  },
  {
    path: 's148',   
    canActivate:[ActiveGuard],  
    component: S148Page,
  },
  
  {
    path: 's149',   
    canActivate:[ActiveGuard],  
    component: S149Page,
  },
  {
    path: 's150',   
    canActivate:[ActiveGuard],  
    component: S150Page,
  },
  {
    path: 's151',   
    canActivate:[ActiveGuard],  
    component: S151Page,
  },
  {
    path: 's152p1',   
    canActivate:[ActiveGuard],  
    component: S152p1Page,
  },
  {
    path: 's152p2',   
    canActivate:[ActiveGuard],  
    component: S152p2Page,
  },
  {
    path: 's153',   
    canActivate:[ActiveGuard],  
    component: S153Page,
  },
  {
    path: 's154',   
    canActivate:[ActiveGuard],  
    component: S154Page,
  },
  {
    path: 's154t',   
    canActivate:[ActiveGuard],  
    component: S154tPage,
  },
  {
    path: 's155',   
    canActivate:[ActiveGuard],  
    component: S155Page,
  },
  {
    path: 's156',   
    canActivate:[ActiveGuard],  
    component: S156Page,
  },
  {
    path: 's157',   
    canActivate:[ActiveGuard],  
    component: S157Page,
  },
  {
    path: 's158',   
    canActivate:[ActiveGuard],  
    component: S158Page,
  },
  {
    path: 's159',   
    canActivate:[ActiveGuard],  
    component: S159Page,
  },
  {
    path: 's160',   
    canActivate:[ActiveGuard],  
    component: S160Page,
  },
  {
    path: 's160p1',   
    canActivate:[ActiveGuard],  
    component: S160p1Page,
  },
  {
    path: 's160p2',   
    canActivate:[ActiveGuard],  
    component: S160p2Page,
  },
  {
    path: 's160p3',   
    canActivate:[ActiveGuard],  
    component: S160p3Page,
  },
  {
    path: 's161p1',   
    canActivate:[ActiveGuard],  
    component: S161p1Page,
  },
  {
    path: 's161p2',   
    canActivate:[ActiveGuard],  
    component: S161p2Page,
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComparisonRoutingModule { }
