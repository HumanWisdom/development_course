import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S486Page } from './s486/s486.page';   
import { S487Page } from './s487/s487.page';   
import { S488Page } from './s488/s488.page';   
import { S488tPage } from './s488t/s488t.page';   
import { S489Page } from './s489/s489.page';   
import { S490Page } from './s490/s490.page';   
import { S491Page } from './s491/s491.page';   
import { S491tPage } from './s491t/s491t.page';   
import { S492Page } from './s492/s492.page';   
import { S493Page } from './s493/s493.page';   
import { S494Page } from './s494/s494.page';  
import { S494p1Page } from './s494p1/s494p1.page'; 
import { S494p2Page } from './s494p2/s494p2.page'; 
import { S494p3Page } from './s494p3/s494p3.page'; 
import { S494p4Page } from './s494p4/s494p4.page'; 
import { S494p5Page } from './s494p5/s494p5.page';   
import { S495Page } from './s495/s495.page';   
import { S496Page } from './s496/s496.page';   
import { S497Page } from './s497/s497.page';   
import { S497tPage } from './s497t/s497t.page';   
import { S498Page } from './s498/s498.page';   
import { S499Page } from './s499/s499.page';   
import { S500Page } from './s500/s500.page';   
import { S500tPage } from './s500t/s500t.page';   
import { S501Page } from './s501/s501.page';   
import { S502Page } from './s502/s502.page';   
import { S502tPage } from './s502t/s502t.page';   
import { S503Page } from './s503/s503.page';   
import { S504Page } from './s504/s504.page';   
import { S505Page } from './s505/s505.page';   
import { S506Page } from './s506/s506.page';   
import { S507Page } from './s507/s507.page';   
import { S508Page } from './s508/s508.page';   
import { S509Page } from './s509/s509.page';   
import { S510Page } from './s510/s510.page';   
import { S511Page } from './s511/s511.page';   
import { S511tPage } from './s511t/s511t.page';   
import { S512Page } from './s512/s512.page';   
import { S513Page } from './s513/s513.page';   
import { S513tPage } from './s513t/s513t.page';   
import { S514Page } from './s514/s514.page';   
import { S515Page } from './s515/s515.page';   
import { S515tPage } from './s515t/s515t.page';   
import { S516Page } from './s516/s516.page';   
import { S516tPage } from './s516t/s516t.page';   
import { S517Page } from './s517/s517.page';   
import { S518Page } from './s518/s518.page';   
import { S518tPage } from './s518t/s518t.page';   
import { S519Page } from './s519/s519.page';   
import { S519tPage } from './s519t/s519t.page';   
import { S520Page } from './s520/s520.page';   
import { S521Page } from './s521/s521.page';   
import { S522Page } from './s522/s522.page';   
import { S522tPage } from './s522t/s522t.page';   
import { S523Page } from './s523/s523.page';   
import { S524Page } from './s524/s524.page';  
import { S524tPage } from './s524t/s524t.page';   
import { S525Page } from './s525/s525.page';   
import { S525tPage } from './s525t/s525t.page';   
import { S526Page } from './s526/s526.page';   
import { S526tPage } from './s526t/s526t.page';   
import { S527Page } from './s527/s527.page';   
import { S528Page } from './s528/s528.page';   
import { S529Page } from './s529/s529.page';   
import { S530Page } from './s530/s530.page';   
import { S531Page } from './s531/s531.page';   
import { S532Page } from './s532/s532.page';   
import { S533Page } from './s533/s533.page';   
import { S534Page } from './s534/s534.page';   
import { S535Page } from './s535/s535.page';   
import { S536Page } from './s536/s536.page';   
import { S537Page } from './s537/s537.page';   
import { S537tPage } from './s537t/s537t.page';   
import { S538Page } from './s538/s538.page';   
import { S539Page } from './s539/s539.page';   
import { S540Page } from './s540/s540.page';  
import { S540tPage } from './s540t/s540t.page';   
import { S541Page } from './s541/s541.page';   
import { S542Page } from './s542/s542.page';   
import { S543Page } from './s543/s543.page';   
import { S543tPage } from './s543t/s543t.page';
import { S544Page } from './s544/s544.page'; 
import { S545Page } from './s545/s545.page'; 
import { S546Page } from './s546/s546.page'; 
import { S546tPage } from './s546t/s546t.page';
import { S547Page } from './s547/s547.page'; 
import { S548Page } from './s548/s548.page';                 
import { S549Page } from './s549/s549.page';   
import { S550Page } from './s550/s550.page';   
import { S550tPage } from './s550t/s550t.page';   
import { S551Page } from './s551/s551.page';   
import { S552Page } from './s552/s552.page';   
import { S553Page } from './s553/s553.page';   
import { S553tPage } from './s553t/s553t.page';   
import { S554Page } from './s554/s554.page';   
import { S555Page } from './s555/s555.page';   
import { S555tPage } from './s555t/s555t.page';   
import { S556Page } from './s556/s556.page';   
import { S557Page } from './s557/s557.page';   
import { S558Page } from './s558/s558.page';   
import { S559Page } from './s559/s559.page';   
import { S560Page } from './s560/s560.page';   
import { S561Page } from './s561/s561.page';   
import { S562Page } from './s562/s562.page';   
import { S563Page } from './s563/s563.page';   
import { S564Page } from './s564/s564.page';   
import { S565Page } from './s565/s565.page';   
import { S565tPage } from './s565t/s565t.page';   
import { S566Page } from './s566/s566.page';   
import { S567Page } from './s567/s567.page';   
import { S568Page } from './s568/s568.page';   
import { S569Page } from './s569/s569.page';   
import { S570Page } from './s570/s570.page';   
import { S571Page } from './s571/s571.page';   
import { S571tPage } from './s571t/s571t.page';   
import { S572Page } from './s572/s572.page';   
import { S572tPage } from './s572t/s572t.page';   
import { S573Page } from './s573/s573.page';   
import { S574Page } from './s574/s574.page';   
import { S574tPage } from './s574t/s574t.page';   
import { S575Page } from './s575/s575.page';   
import { S576Page } from './s576/s576.page';   
import { S576tPage } from './s576t/s576t.page';   
import { S577Page } from './s577/s577.page';   
import { S578Page } from './s578/s578.page';   
import { S579Page } from './s579/s579.page';   
import { S579tPage } from './s579t/s579t.page';   
import { S580Page } from './s580/s580.page';   
import { S581Page } from './s581/s581.page';   
import { S582Page } from './s582/s582.page';   
import { S583Page } from './s583/s583.page';   
import { S584Page } from './s584/s584.page';   
import { S585Page } from './s585/s585.page';   
import { S586Page } from './s586/s586.page';   
import { S587Page } from './s587/s587.page';   
import { S587tPage } from './s587t/s587t.page';   
import { S588Page } from './s588/s588.page';   
import { S589Page } from './s589/s589.page';   
import { S590Page } from './s590/s590.page'; 
import { S591Page } from './s591/s591.page';    
import { S591tPage } from './s591t/s591t.page';   
import { S592Page } from './s592/s592.page';  
import { S593Page } from './s593/s593.page';   
import { S593tPage } from './s593t/s593t.page';   
import { S594Page } from './s594/s594.page';   
import { S595Page } from './s595/s595.page';   
import { S596Page } from './s596/s596.page';
import { S596tPage } from './s596t/s596t.page'; 
import { S597Page } from './s597/s597.page'; 
import { S598Page } from './s598/s598.page'; 
import { S598tPage } from './s598t/s598t.page';
import { S599Page } from './s599/s599.page'; 
import { S600Page } from './s600/s600.page';                 
import { S601Page } from './s601/s601.page';   
import { S601tPage } from './s601t/s601t.page';   
import { S602Page } from './s602/s602.page'; 
import { S603Page } from './s603/s603.page';   
import { S603p1Page } from './s603p1/s603p1.page';   
import { S603tPage } from './s603t/s603t.page';   
import { S604Page } from './s604/s604.page';   
import { S605Page } from './s605/s605.page';   
import { S605tPage } from './s605t/s605t.page';   
import { S606Page } from './s606/s606.page';   
import { S606tPage } from './s606t/s606t.page';   
import { S607Page } from './s607/s607.page';   
import { S608Page } from './s608/s608.page';   
import { S609Page } from './s609/s609.page';   
import { S609p1Page } from './s609p1/s609p1.page';   
import { S609tPage } from './s609t/s609t.page';   
import { S610Page } from './s610/s610.page';   
import { S611Page } from './s611/s611.page';   
import { S612Page } from './s612/s612.page';   
import { S613Page } from './s613/s613.page';   
import { S614Page } from './s614/s614.page';  
import { S614p1Page } from './s614p1/s614p1.page';  
import { S614p3Page } from './s614p3/s614p3.page';  
import { S614p4Page } from './s614p4/s614p4.page';  
import { S614p5Page } from './s614p5/s614p5.page';  
import { S614p01Page } from './s614p01/s614p01.page';   
import { S615Page } from './s615/s615.page'; 
import { S615p1Page } from './s615p1/s615p1.page'; 
import { S615p2Page } from './s615p2/s615p2.page'; 
import { S615p3Page } from './s615p3/s615p3.page'; 
import { S615p4Page } from './s615p4/s615p4.page'; 
import { S616Page } from './s616/s616.page'; 
import { S617Page } from './s617/s617.page';  
import { S614p2Page } from './s614p2/s614p2.page';    

import { FearAnxietyRoutingModule } from './fear-anxiety-routing.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  declarations: [
    S486Page, 
    S487Page, 
    S488Page, 
    S488tPage, 
    S489Page, 
    S490Page, 
    S491Page, 
    S491tPage, 
    S492Page, 
    S493Page, 
    S494Page,
    S494p1Page,
    S494p2Page,
    S494p3Page,
    S494p4Page,
    S494p5Page,
    S495Page, 
    S496Page, 
    S497Page, 
    S497tPage, 
    S498Page, 
    S499Page, 
    S500Page, 
    S500tPage, 
    S500tPage, 
    S501Page, 
    S502Page, 
    S502tPage, 
    S503Page,     
    S504Page, 
    S505Page, 
    S506Page, 
    S507Page, 
    S508Page, 
    S509Page, 
    S510Page, 
    S511Page, 
    S511tPage, 
    S512Page, 
    S513Page, 
    S513tPage, 
    S514Page, 
    S515Page, 
    S515tPage, 
    S516Page, 
    S516tPage, 
    S517Page, 
    S518Page, 
    S518tPage, 
    S519Page, 
    S519tPage, 
    S520Page, 
    S521Page, 
    S522Page, 
    S522tPage, 
    S523Page, 
    S524Page, 
    S524tPage, 
    S525Page, 
    S525tPage, 
    S526Page, 
    S526tPage, 
    S527Page, 
    S528Page, 
    S529Page, 
    S530Page, 
    S531Page, 
    S532Page, 
    S533Page, 
    S534Page, 
    S535Page, 
    S536Page, 
    S537Page, 
    S537tPage, 
    S538Page, 
    S539Page, 
    S540Page, 
    S540tPage, 
    S541Page, 
    S542Page, 
    S543Page, 
    S543tPage, 
    S544Page, 
    S545Page, 
    S546Page, 
    S546tPage,
    S547Page,
    S548Page, 
    S549Page, 
    S550Page, 
    S550tPage,
    S551Page,
    S552Page,
    S553Page,
    S553tPage,
    S554Page,
    S555Page,
    S555tPage,
    S556Page,
    S557Page,
    S558Page,
    S559Page,
    S560Page,
    S561Page,
    S562Page,
    S563Page,
    S564Page,
    S565Page,
    S565tPage,
    S566Page,
    S567Page,
    S568Page,
    S569Page,
    S570Page,
    S571Page,
    S571tPage,
    S572Page,
    S572tPage,
    S573Page,
    S574Page,
    S574tPage,
    S575Page,
    S576Page,
    S576tPage,
    S577Page,
    S578Page,
    S579Page,
    S579tPage,
    S580Page,
    S581Page,
    S582Page,
    S583Page,
    S584Page,
    S585Page,
    S586Page,
    S587Page,
    S587tPage,
    S588Page,
    S589Page,
    S590Page,
    S591Page,
    S591tPage,
    S592Page,
    S593Page,
    S593tPage,
    S594Page,
    S595Page,
    S596Page,
    S596tPage,
    S597Page,
    S598Page,
    S598tPage,
    S599Page,
    S600Page,
    S601Page,
    S601tPage,
    S602Page,
    S603Page,
    S603p1Page,
    S603tPage,
    S604Page,
    S605Page,
    S605tPage,
    S606Page,
    S606tPage,
    S607Page,
    S608Page,
    S609Page,
    S609p1Page,
    S609tPage,
    S610Page,
    S611Page,
    S612Page,
    S613Page,
    S614p1Page,
    S614p3Page,
    S614p4Page,
    S614p5Page,
    S614p01Page,
    S614Page,
    S615Page,
    S615p1Page,
    S615p2Page,
    S615p3Page,
    S615p4Page,    
    S616Page,
    S617Page,    
    S614p2Page 
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FearAnxietyRoutingModule,
    NgxCircularPlayerModule 
  ],
  providers:[
    AdultsService
  ]
})
export class FearAnxietyModule { }
