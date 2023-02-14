import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S162Page } from './s162/s162.page';  
import { S162p0Page } from './s162p0/s162p0.page'; 
import { S163Page } from './s163/s163.page'; 
import { S164Page } from './s164/s164.page'; 
import { S164tPage } from './s164t/s164t.page'; 
import { S165Page } from './s165/s165.page'; 
import { S166Page } from './s166/s166.page'; 
import { S167Page } from './s167/s167.page'; 
import { S168Page } from './s168/s168.page'; 
import { S169Page } from './s169/s169.page'; 
import { S169tPage } from './s169t/s169t.page'; 
import { S170Page } from './s170/s170.page'; 
import { S170tPage } from './s170t/s170t.page'; 
import { S171Page } from './s171/s171.page'; 
import { S171tPage } from './s171t/s171t.page'; 
import { S172Page } from './s172/s172.page'; 
import { S172tPage } from './s172t/s172t.page'; 
import { S173Page } from './s173/s173.page'; 
import { S174Page } from './s174/s174.page'; 
import { S175Page } from './s175/s175.page'; 
import { S176Page } from './s176/s176.page'; 
import { S177Page } from './s177/s177.page'; 
import { S178p1Page } from './s178p1/s178p1.page'; 
import { S178p2Page } from './s178p2/s178p2.page'; 
import { S179Page } from './s179/s179.page'; 
import { S180Page } from './s180/s180.page'; 
import { S181Page } from './s181/s181.page'; 
import { S181tPage } from './s181t/s181t.page'; 
import { S182Page } from './s182/s182.page'; 
import { S183Page } from './s183/s183.page'; 
import { S183tPage } from './s183t/s183t.page'; 
import { S184Page } from './s184/s184.page'; 
import { S184tPage } from './s184t/s184t.page'; 
import { S185Page } from './s185/s185.page'; 
import { S186Page } from './s186/s186.page'; 
import { S187Page } from './s187/s187.page'; 
import { S188Page } from './s188/s188.page'; 
import { S188p0Page } from './s188p0/s188p0.page';
import { S188p1Page } from './s188p1/s188p1.page';
import { S188p2Page } from './s188p2/s188p2.page';
import { S188p3Page } from './s188p3/s188p3.page';
import { S188p4Page } from './s188p4/s188p4.page';
import { S188p5Page } from './s188p5/s188p5.page';
import { S188p6Page } from './s188p6/s188p6.page';
import { S188p7Page } from './s188p7/s188p7.page';
import { S188p8Page } from './s188p8/s188p8.page';
import { S188tPage } from './s188t/s188t.page';
import { S189Page } from './s189/s189.page'; 
import { S189p0Page } from './s189p0/s189p0.page'; 
import { S189p1Page } from './s189p1/s189p1.page'; 
import { S189p2Page } from './s189p2/s189p2.page'; 
import { S189p3Page } from './s189p3/s189p3.page'; 
import { S189p4Page } from './s189p4/s189p4.page'; 
import { S189p5Page } from './s189p5/s189p5.page'; 
import { S189p6Page } from './s189p6/s189p6.page'; 
import { S189tPage } from './s189t/s189t.page';
import { S190Page } from './s190/s190.page'; 
import { S191Page } from './s191/s191.page'; 
import { S191tPage } from './s191t/s191t.page'; 
import { S192Page } from './s192/s192.page'; 
import { S193Page } from './s193/s193.page'; 
import { S193tPage } from './s193t/s193t.page'; 
import { S194Page } from './s194/s194.page'; 
import { S195Page } from './s195/s195.page'; 
import { S196Page } from './s196/s196.page'; 
import { S196tPage } from './s196t/s196t.page'; 
import { S197Page } from './s197/s197.page'; 
import { S198p1Page } from './s198p1/s198p1.page'; 
import { S198p2Page } from './s198p2/s198p2.page'; 
import { S199Page } from './s199/s199.page'; 
import { S200Page } from './s200/s200.page'; 
import { S201Page } from './s201/s201.page';
import { S201tPage } from './s201t/s201t.page';    
import { S202Page } from './s202/s202.page';  
import { S203Page } from './s203/s203.page';  
import { S204Page } from './s204/s204.page';
import { S204tPage } from './s204t/s204t.page';    
import { S205Page } from './s205/s205.page';  
import { S206Page } from './s206/s206.page';  
import { S206tPage } from './s206t/s206t.page';  
import { S207Page } from './s207/s207.page';  
import { S208Page } from './s208/s208.page';  
import { S209Page } from './s209/s209.page';  
import { S209tPage } from './s209t/s209t.page';  
import { S210Page } from './s210/s210.page';  
import { S211Page } from './s211/s211.page'; 
import { S211tPage } from './s211t/s211t.page'; 
import { S212Page } from './s212/s212.page';  
import { S213Page } from './s213/s213.page';  
import { S214Page } from './s214/s214.page';  
import { S215Page } from './s215/s215.page';  
import { S216Page } from './s216/s216.page';
import { S216p0Page } from './s216p0/s216p0.page';
import { S216p1Page } from './s216p1/s216p1.page';
import { S216p2Page } from './s216p2/s216p2.page';
import { S216p3Page } from './s216p3/s216p3.page';
import { S216p4Page } from './s216p4/s216p4.page';
import { S216p5Page } from './s216p5/s216p5.page';
import { S216p6Page } from './s216p6/s216p6.page';
import { S216p7Page } from './s216p7/s216p7.page'; 
import { S216tPage } from './s216t/s216t.page';
import { S217Page } from './s217/s217.page';  
import { S218Page } from './s218/s218.page'; 
import { S218tPage } from './s218t/s218t.page';  
import { S219Page } from './s219/s219.page';  
import { S220Page } from './s220/s220.page';  
import { S221Page } from './s221/s221.page';  
import { S222Page } from './s222/s222.page';  
import { S222tPage } from './s222t/s222t.page';  
import { S223Page } from './s223/s223.page';  
import { S224Page } from './s224/s224.page';  
import { S225Page } from './s225/s225.page';  
import { S226Page } from './s226/s226.page';  
import { S227Page } from './s227/s227.page'; 
import { S227tPage } from './s227t/s227t.page';  
import { S228Page } from './s228/s228.page'; 
import { S228p1Page } from './s228p1/s228p1.page'; 
import { S228p2Page } from './s228p2/s228p2.page'; 
import { S228p3Page } from './s228p3/s228p3.page';  
import { S229Page } from './s229/s229.page';  
import { S230Page } from './s230/s230.page';  
import { S230p1Page } from './s230p1/s230p1.page'; 
import { S230p2Page } from './s230p2/s230p2.page';  
import { S230p3Page } from './s230p3/s230p3.page';  
import { S231p1Page } from './s231p1/s231p1.page';  
import { S231p2Page } from './s231p2/s231p2.page';  

import { AngerRoutingModule } from './anger-routing.module';

import { NgxCircularPlayerModule } from '../../../../../ngx-circular-player';

@NgModule({
  declarations: [
    S162Page, 
    S162p0Page, 
    S163Page, 
    S164Page, 
    S164tPage, 
    S165Page, 
    S166Page, 
    S167Page, 
    S168Page, 
    S169Page, 
    S169tPage, 
    S170Page, 
    S170tPage, 
    S171Page, 
    S171tPage, 
    S172Page, 
    S172tPage, 
    S173Page, 
    S174Page, 
    S175Page, 
    S176Page, 
    S177Page, 
    S178p1Page, 
    S178p2Page, 
    S179Page, 
    S180Page, 
    S181Page, 
    S181tPage, 
    S182Page, 
    S183Page, 
    S183tPage, 
    S184Page, 
    S184tPage, 
    S185Page, 
    S186Page, 
    S187Page, 
    S188Page, 
    S188p0Page, 
    S188p1Page, 
    S188p2Page, 
    S188p3Page, 
    S188p4Page, 
    S188p5Page, 
    S188p6Page, 
    S188p7Page, 
    S188p8Page, 
    S188tPage, 
    S189Page, 
    S189p0Page, 
    S189p1Page, 
    S189p2Page, 
    S189p3Page, 
    S189p4Page, 
    S189p5Page, 
    S189p6Page, 
    S189tPage, 
    S190Page, 
    S191Page, 
    S191tPage, 
    S192Page, 
    S193Page, 
    S193tPage, 
    S194Page, 
    S195Page, 
    S196Page, 
    S196tPage, 
    S197Page, 
    S198p1Page, 
    S198p2Page, 
    S199Page, 
    S200Page, 
    S201Page, 
    S201tPage, 
    S202Page, 
    S203Page, 
    S204Page, 
    S204tPage, 
    S205Page, 
    S206Page,
    S206tPage,
    S207Page, 
    S208Page, 
    S209Page, 
    S209tPage, 
    S210Page, 
    S211Page, 
    S211tPage, 
    S212Page, 
    S213Page, 
    S214Page, 
    S215Page, 
    S216Page, 
    S216p0Page, 
    S216p1Page, 
    S216p2Page, 
    S216p3Page, 
    S216p4Page, 
    S216p5Page, 
    S216p6Page, 
    S216p7Page, 
    S216tPage, 
    S217Page, 
    S218Page, 
    S218tPage, 
    S219Page, 
    S220Page, 
    S221Page, 
    S222Page, 
    S222tPage, 
    S223Page, 
    S224Page, 
    S225Page, 
    S226Page, 
    S227Page,
    S227tPage,
    S228Page,
    S228p1Page,
    S228p2Page,
    S228p3Page, 
    S229Page,
    S230Page,
    S230p1Page,
    S230p2Page,
    S230p3Page,
    S231p1Page,
    S231p2Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AngerRoutingModule,
    NgxCircularPlayerModule    
  ],
  providers:[
    AdultsService
  ]
})
export class AngerModule { }
