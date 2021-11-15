import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

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

const routes: Routes = [
  {
    path: '',    
    canActivate:[ActiveGuard],  
    component: S162Page,
  },
  {
    path: 's162',   
    canActivate:[ActiveGuard],  
    component: S162Page,
  },
  {
    path: 's162p0',   
    canActivate:[ActiveGuard],  
    component: S162p0Page,
  },
  {
    path: 's163',   
    canActivate:[ActiveGuard],  
    component: S163Page,
  },
  {
    path: 's164',   
    canActivate:[ActiveGuard],  
    component: S164Page,
  },
  {
    path: 's164t',   
    canActivate:[ActiveGuard],  
    component: S164tPage,
  },
  {
    path: 's165',   
    canActivate:[ActiveGuard],  
    component: S165Page,
  },
  {
    path: 's166',   
    canActivate:[ActiveGuard],  
    component: S166Page,
  },
  {
    path: 's167',   
    canActivate:[ActiveGuard],  
    component: S167Page,
  },
  {
    path: 's168',   
    canActivate:[ActiveGuard],  
    component: S168Page,
  },
  {
    path: 's169',   
    canActivate:[ActiveGuard],  
    component: S169Page,
  },  
  {
    path: 's169t',   
    canActivate:[ActiveGuard],  
    component: S169tPage,
  },
  {
    path: 's170',   
    canActivate:[ActiveGuard],  
    component: S170Page,
  },
  {
    path: 's170t',   
    canActivate:[ActiveGuard],  
    component: S170tPage,
  },
  {
    path: 's171',   
    canActivate:[ActiveGuard],  
    component: S171Page,
  },
  {
    path: 's171t',   
    canActivate:[ActiveGuard],  
    component: S171tPage,
  },
  {
    path: 's172',   
    canActivate:[ActiveGuard],  
    component: S172Page,
  },
  {
    path: 's172t',   
    canActivate:[ActiveGuard],  
    component: S172tPage,
  },
  {
    path: 's173',   
    canActivate:[ActiveGuard],  
    component: S173Page,
  },
  {
    path: 's174',   
    canActivate:[ActiveGuard],  
    component: S174Page,
  },
  {
    path: 's175',   
    canActivate:[ActiveGuard],  
    component: S175Page,
  },
  {
    path: 's176',   
    canActivate:[ActiveGuard],  
    component: S176Page,
  },
  {
    path: 's177',   
    canActivate:[ActiveGuard],  
    component: S177Page,
  },
  {
    path: 's178p1',   
    canActivate:[ActiveGuard],  
    component: S178p1Page,
  },
  {
    path: 's178p2',   
    canActivate:[ActiveGuard],  
    component: S178p2Page,
  },
  {
    path: 's179',   
    canActivate:[ActiveGuard],  
    component: S179Page,
  },
  {
    path: 's180',   
    canActivate:[ActiveGuard],  
    component: S180Page,
  },
  {
    path: 's181',   
    canActivate:[ActiveGuard],  
    component: S181Page,
  },
  {
    path: 's181t',   
    canActivate:[ActiveGuard],  
    component: S181tPage,
  },
  {
    path: 's182',   
    canActivate:[ActiveGuard],  
    component: S182Page,
  },
  {
    path: 's183',   
    canActivate:[ActiveGuard],  
    component: S183Page,
  },
  {
    path: 's183t',   
    canActivate:[ActiveGuard],  
    component: S183tPage,
  },
  
  {
    path: 's184',   
    canActivate:[ActiveGuard],  
    component: S184Page,
  },
  {
    path: 's184t',   
    canActivate:[ActiveGuard],  
    component: S184tPage,
  },
  {
    path: 's185',   
    canActivate:[ActiveGuard],  
    component: S185Page,
  },
  {
    path: 's186',   
    canActivate:[ActiveGuard],  
    component: S186Page,
  },
  {
    path: 's187',   
    canActivate:[ActiveGuard],  
    component: S187Page,
  },
  {
    path: 's188',   
    canActivate:[ActiveGuard],  
    component: S188Page,
  },
  {
    path: 's188p0',   
    canActivate:[ActiveGuard],  
    component: S188p0Page,
  },
  {
    path: 's188p1',   
    canActivate:[ActiveGuard],  
    component: S188p1Page,
  },
  {
    path: 's188p2',   
    canActivate:[ActiveGuard],  
    component: S188p2Page,
  },  
  {
    path: 's188p3',   
    canActivate:[ActiveGuard],  
    component: S188p3Page,
  },
  {
    path: 's188p4',   
    canActivate:[ActiveGuard],  
    component: S188p4Page,
  },
  {
    path: 's188p5',   
    canActivate:[ActiveGuard],  
    component: S188p5Page,
  },
  {
    path: 's188p6',   
    canActivate:[ActiveGuard],  
    component: S188p6Page,
  },
  {
    path: 's188p7',   
    canActivate:[ActiveGuard],  
    component: S188p7Page,
  },
  {
    path: 's188p8',   
    canActivate:[ActiveGuard],  
    component: S188p8Page,
  },
  {
    path: 's188t',   
    canActivate:[ActiveGuard],  
    component: S188tPage,
  },
  {
    path: 's189',   
    canActivate:[ActiveGuard],  
    component: S189Page,
  },
  {
    path: 's189p0',   
    canActivate:[ActiveGuard],  
    component: S189p0Page,
  },
  {
    path: 's189p1',   
    canActivate:[ActiveGuard],  
    component: S189p1Page,
  },
  {
    path: 's189p2',   
    canActivate:[ActiveGuard],  
    component: S189p2Page,
  },
  {
    path: 's189p3',   
    canActivate:[ActiveGuard],  
    component: S189p3Page,
  },
  {
    path: 's189p4',   
    canActivate:[ActiveGuard],  
    component: S189p4Page,
  },
  {
    path: 's189p5',   
    canActivate:[ActiveGuard],  
    component: S189p5Page,
  },
  {
    path: 's189p6',   
    canActivate:[ActiveGuard],  
    component: S189p6Page,
  },
  {
    path: 's189t',   
    canActivate:[ActiveGuard],  
    component: S189tPage,
  },
  {
    path: 's190',   
    canActivate:[ActiveGuard],  
    component: S190Page,
  },
  {
    path: 's191',   
    canActivate:[ActiveGuard],  
    component: S191Page,
  },
  {
    path: 's191t',   
    canActivate:[ActiveGuard],  
    component: S191tPage,
  },
  {
    path: 's192',   
    canActivate:[ActiveGuard],  
    component: S192Page,
  },  
  {
    path: 's193',   
    canActivate:[ActiveGuard],  
    component: S193Page,
  },
  {
    path: 's193t',   
    canActivate:[ActiveGuard],  
    component: S193tPage,
  },
  {
    path: 's194',   
    canActivate:[ActiveGuard],  
    component: S194Page,
  },
  {
    path: 's195',   
    canActivate:[ActiveGuard],  
    component: S195Page,
  },
  {
    path: 's196',   
    canActivate:[ActiveGuard],  
    component: S196Page,
  },
  {
    path: 's196t',   
    canActivate:[ActiveGuard],  
    component: S196tPage,
  },
  {
    path: 's197',   
    canActivate:[ActiveGuard],  
    component: S197Page,
  },
  {
    path: 's198p1',   
    canActivate:[ActiveGuard],  
    component: S198p1Page,
  },
  {
    path: 's198p2',   
    canActivate:[ActiveGuard],  
    component: S198p2Page,
  },
  {
    path: 's199',   
    canActivate:[ActiveGuard],  
    component: S199Page,
  },  
  {
    path: 's200',   
    canActivate:[ActiveGuard],  
    component: S200Page,
  },
  {
    path: 's201',   
    canActivate:[ActiveGuard],  
    component: S201Page,
  },
  {
    path: 's201t',   
    canActivate:[ActiveGuard],  
    component: S201tPage,
  },
  {
    path: 's202',   
    canActivate:[ActiveGuard],  
    component: S202Page,
  },
  {
    path: 's203',   
    canActivate:[ActiveGuard],  
    component: S203Page,
  },
  {
    path: 's204',   
    canActivate:[ActiveGuard],  
    component: S204Page,
  },
  {
    path: 's204t',   
    canActivate:[ActiveGuard],  
    component: S204tPage,
  },
  {
    path: 's205',   
    canActivate:[ActiveGuard],  
    component: S205Page,
  },
  {
    path: 's206',   
    canActivate:[ActiveGuard],  
    component: S206Page,
  },
  {
    path: 's206t',   
    canActivate:[ActiveGuard],  
    component: S206tPage,
  },  
  {
    path: 's207',   
    canActivate:[ActiveGuard],  
    component: S207Page,
  },
  {
    path: 's208',   
    canActivate:[ActiveGuard],  
    component: S208Page,
  },
  {
    path: 's209',   
    canActivate:[ActiveGuard],  
    component: S209Page,
  },
  {
    path: 's209t',   
    canActivate:[ActiveGuard],  
    component: S209tPage,
  },
  {
    path: 's210',   
    canActivate:[ActiveGuard],  
    component: S210Page,
  },
  {
    path: 's211',   
    canActivate:[ActiveGuard],  
    component: S211Page,
  },
  {
    path: 's211t',   
    canActivate:[ActiveGuard],  
    component: S211tPage,
  },
  {
    path: 's212',   
    canActivate:[ActiveGuard],  
    component: S212Page,
  },
  {
    path: 's213',   
    canActivate:[ActiveGuard],  
    component: S213Page,
  },
  {
    path: 's214',   
    canActivate:[ActiveGuard],  
    component: S214Page,
  },
  {
    path: 's215',   
    canActivate:[ActiveGuard],  
    component: S215Page,
  },
  {
    path: 's216',   
    canActivate:[ActiveGuard],  
    component: S216Page,
  },
  {
    path: 's216p0',   
    canActivate:[ActiveGuard],  
    component: S216p0Page,
  },
  {
    path: 's216p1',   
    canActivate:[ActiveGuard],  
    component: S216p1Page,
  },
  {
    path: 's216p2',   
    canActivate:[ActiveGuard],  
    component: S216p2Page,
  },
  {
    path: 's216p3',   
    canActivate:[ActiveGuard],  
    component: S216p3Page,
  },
  {
    path: 's216p4',   
    canActivate:[ActiveGuard],  
    component: S216p4Page,
  },
  {
    path: 's216p5',   
    canActivate:[ActiveGuard],  
    component: S216p5Page,
  },
  {
    path: 's216p6',   
    canActivate:[ActiveGuard],  
    component: S216p6Page,
  },
  {
    path: 's216p7',   
    canActivate:[ActiveGuard],  
    component: S216p7Page,
  },
  {
    path: 's216t',   
    canActivate:[ActiveGuard],  
    component: S216tPage,
  },
  {
    path: 's217',   
    canActivate:[ActiveGuard],  
    component: S217Page,
  },  
  {
    path: 's218',   
    canActivate:[ActiveGuard],  
    component: S218Page,
  },
  {
    path: 's218t',   
    canActivate:[ActiveGuard],  
    component: S218tPage,
  },
  {
    path: 's219',   
    canActivate:[ActiveGuard],  
    component: S219Page,
  },
  {
    path: 's220',   
    canActivate:[ActiveGuard],  
    component: S220Page,
  },
  {
    path: 's221',   
    canActivate:[ActiveGuard],  
    component: S221Page,
  },
  {
    path: 's222',   
    canActivate:[ActiveGuard],  
    component: S222Page,
  },
  {
    path: 's222t',   
    canActivate:[ActiveGuard],  
    component: S222tPage,
  },
  {
    path: 's223',   
    canActivate:[ActiveGuard],  
    component: S223Page,
  },
  {
    path: 's224',   
    canActivate:[ActiveGuard],  
    component: S224Page,
  },
  {
    path: 's225',   
    canActivate:[ActiveGuard],  
    component: S225Page,
  },
  {
    path: 's226',   
    canActivate:[ActiveGuard],  
    component: S226Page,
  },
  {
    path: 's227',   
    canActivate:[ActiveGuard],  
    component: S227Page,
  },
  {
    path: 's227t',   
    canActivate:[ActiveGuard],  
    component: S227tPage,
  },
  {
    path: 's228',   
    canActivate:[ActiveGuard],  
    component: S228Page,
  },
  {
    path: 's228p1',   
    canActivate:[ActiveGuard],  
    component: S228p1Page,
  },
  {
    path: 's228p2',   
    canActivate:[ActiveGuard],  
    component: S228p2Page,
  },
  {
    path: 's228p3',   
    canActivate:[ActiveGuard],  
    component: S228p3Page,
  },
  {
    path: 's229',   
    canActivate:[ActiveGuard],  
    component: S229Page,
  },
  {
    path: 's230',   
    canActivate:[ActiveGuard],  
    component: S230Page,
  },
  {
    path: 's230p1',   
    canActivate:[ActiveGuard],  
    component: S230p1Page,
  },
  {
    path: 's230p2',   
    canActivate:[ActiveGuard],  
    component: S230p2Page,
  },
  {
    path: 's230p3',   
    canActivate:[ActiveGuard],  
    component: S230p3Page,
  },
  {
    path: 's231p1',   
    canActivate:[ActiveGuard],  
    component: S231p1Page,
  },
  {
    path: 's231p2',   
    canActivate:[ActiveGuard],  
    component: S231p2Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngerRoutingModule { }
