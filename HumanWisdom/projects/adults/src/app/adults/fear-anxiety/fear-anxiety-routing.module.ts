import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

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
import { S616p1Page } from './s616p1/s616p1.page'; 
import { S617Page } from './s617/s617.page';    
import { S614p2Page } from './s614p2/s614p2.page';    

const routes: Routes = [
  {
    path: '',   
    component: S486Page,
  },
  {
    path: 's486',   
    canActivate:[ActiveGuard],  
    component: S486Page,
  },
  {
    path: 's487',   
    canActivate:[ActiveGuard],  
    component: S487Page,
  },
  {
    path: 's488',   
    canActivate:[ActiveGuard],  
    component: S488Page,
  },
  {
    path: 's488t',   
    canActivate:[ActiveGuard],  
    component: S488tPage,
  },
  {
    path: 's489',   
    canActivate:[ActiveGuard],  
    component: S489Page,
  },
  {
    path: 's490',   
    canActivate:[ActiveGuard],  
    component: S490Page,
  },
  {
    path: 's491',   
    canActivate:[ActiveGuard],  
    component: S491Page,
  },
  {
    path: 's491t',   
    canActivate:[ActiveGuard],  
    component: S491tPage,
  },
  {
    path: 's492',   
    canActivate:[ActiveGuard],  
    component: S492Page,
  },
  {
    path: 's493',   
    canActivate:[ActiveGuard],  
    component: S493Page,
  },  
  {
    path: 's494',   
    canActivate:[ActiveGuard],  
    component: S494Page,
  },
  {
    path: 's494p1',   
    canActivate:[ActiveGuard],  
    component: S494p1Page,
  },
  {
    path: 's494p2',   
    canActivate:[ActiveGuard],  
    component: S494p2Page,
  },
  {
    path: 's494p3',   
    canActivate:[ActiveGuard],  
    component: S494p3Page,
  },
  {
    path: 's494p4',   
    canActivate:[ActiveGuard],  
    component: S494p4Page,
  },
  {
    path: 's494p5',   
    canActivate:[ActiveGuard],  
    component: S494p5Page,
  },
  {
    path: 's495',   
    canActivate:[ActiveGuard],  
    component: S495Page,
  },
  {
    path: 's496',   
    canActivate:[ActiveGuard],  
    component: S496Page,
  },
  {
    path: 's497',   
    canActivate:[ActiveGuard],  
    component: S497Page,
  },
  {
    path: 's497t',   
    canActivate:[ActiveGuard],  
    component: S497tPage,
  },
  {
    path: 's498',   
    canActivate:[ActiveGuard],  
    component: S498Page,
  },
  {
    path: 's499',   
    canActivate:[ActiveGuard],  
    component: S499Page,
  },
  {
    path: 's500',   
    canActivate:[ActiveGuard],  
    component: S500Page,
  },
  {
    path: 's500t',   
    canActivate:[ActiveGuard],  
    component: S500tPage,
  }, 
  {
    path: 's501',   
    canActivate:[ActiveGuard],  
    component: S501Page,
  },
  {
    path: 's502',   
    canActivate:[ActiveGuard],  
    component: S502Page,
  },
  {
    path: 's502t',   
    canActivate:[ActiveGuard],  
    component: S502tPage,
  },
  {
    path: 's503',   
    canActivate:[ActiveGuard],  
    component: S503Page,
  },
  {
    path: 's504',   
    canActivate:[ActiveGuard],  
    component: S504Page,
  },
  {
    path: 's505',   
    canActivate:[ActiveGuard],  
    component: S505Page,
  },
  {
    path: 's506',   
    canActivate:[ActiveGuard],  
    component: S506Page,
  },
  {
    path: 's507',   
    canActivate:[ActiveGuard],  
    component: S507Page,
  },
  {
    path: 's508',   
    canActivate:[ActiveGuard],  
    component: S508Page,
  },
  {
    path: 's509',   
    canActivate:[ActiveGuard],  
    component: S509Page,
  },  
  {
    path: 's510',   
    canActivate:[ActiveGuard],  
    component: S510Page,
  },
  {
    path: 's511',   
    canActivate:[ActiveGuard],  
    component: S511Page,
  },
  {
    path: 's511t',   
    canActivate:[ActiveGuard],  
    component: S511tPage,
  },
  {
    path: 's512',   
    canActivate:[ActiveGuard],  
    component: S512Page,
  },
  {
    path: 's513',   
    canActivate:[ActiveGuard],  
    component: S513Page,
  },
  {
    path: 's513t',   
    canActivate:[ActiveGuard],  
    component: S513tPage,
  },
  {
    path: 's514',   
    canActivate:[ActiveGuard],  
    component: S514Page,
  },
  {
    path: 's515',   
    canActivate:[ActiveGuard],  
    component: S515Page,
  },
  {
    path: 's515t',   
    canActivate:[ActiveGuard],  
    component: S515tPage,
  },
  {
    path: 's516',   
    canActivate:[ActiveGuard],  
    component: S516Page,
  },  
  {
    path: 's516t',   
    canActivate:[ActiveGuard],  
    component: S516tPage,
  },
  {
    path: 's517',   
    canActivate:[ActiveGuard],  
    component: S517Page,
  },
  {
    path: 's518',   
    canActivate:[ActiveGuard],  
    component: S518Page,
  },
  {
    path: 's518t',   
    canActivate:[ActiveGuard],  
    component: S518tPage,
  },
  {
    path: 's519',   
    canActivate:[ActiveGuard],  
    component: S519Page,
  },
  {
    path: 's519t',   
    canActivate:[ActiveGuard],  
    component: S519tPage,
  },
  {
    path: 's520',   
    canActivate:[ActiveGuard],  
    component: S520Page,
  },
  {
    path: 's521',   
    canActivate:[ActiveGuard],  
    component: S521Page,
  },
  {
    path: 's522',   
    canActivate:[ActiveGuard],  
    component: S522Page,
  },
  {
    path: 's522t',   
    canActivate:[ActiveGuard],  
    component: S522tPage,
  },
  {
    path: 's523',   
    canActivate:[ActiveGuard],  
    component: S523Page,
  },
  {
    path: 's524',   
    canActivate:[ActiveGuard],  
    component: S524Page,
  },
  {
    path: 's524t',   
    canActivate:[ActiveGuard],  
    component: S524tPage,
  },
  {
    path: 's525',   
    canActivate:[ActiveGuard],  
    component: S525Page,
  },
  {
    path: 's525t',   
    canActivate:[ActiveGuard],  
    component: S525tPage,
  },
  {
    path: 's526',   
    canActivate:[ActiveGuard],  
    component: S526Page,
  },
  {
    path: 's526t',   
    canActivate:[ActiveGuard],  
    component: S526tPage,
  },
  {
    path: 's527',   
    canActivate:[ActiveGuard],  
    component: S527Page,
  },
  {
    path: 's528',   
    canActivate:[ActiveGuard],  
    component: S528Page,
  },
  {
    path: 's529',   
    canActivate:[ActiveGuard],  
    component: S529Page,
  },  
  {
    path: 's530',   
    canActivate:[ActiveGuard],  
    component: S530Page,
  },
  {
    path: 's531',   
    canActivate:[ActiveGuard],  
    component: S531Page,
  },  
  {
    path: 's532',   
    canActivate:[ActiveGuard],  
    component: S532Page,
  },
  {
    path: 's533',   
    canActivate:[ActiveGuard],  
    component: S533Page,
  },
  {
    path: 's534',   
    canActivate:[ActiveGuard],  
    component: S534Page,
  },
  {
    path: 's535',   
    canActivate:[ActiveGuard],  
    component: S535Page,
  },
  {
    path: 's536',   
    canActivate:[ActiveGuard],  
    component: S536Page,
  },
  {
    path: 's537',   
    canActivate:[ActiveGuard],  
    component: S537Page,
  },
  {
    path: 's537t',   
    canActivate:[ActiveGuard],  
    component: S537tPage,
  },
  
  {
    path: 's538',   
    canActivate:[ActiveGuard],  
    component: S538Page,
  },
  {
    path: 's539',   
    canActivate:[ActiveGuard],  
    component: S539Page,
  },
  {
    path: 's540',   
    canActivate:[ActiveGuard],  
    component: S540Page,
  },
  {
    path: 's540t',   
    canActivate:[ActiveGuard],  
    component: S540tPage,
  },
  {
    path: 's541',   
    canActivate:[ActiveGuard],  
    component: S541Page,
  },
  {
    path: 's542',   
    canActivate:[ActiveGuard],  
    component: S542Page,
  },
  {
    path: 's543',   
    canActivate:[ActiveGuard],  
    component: S543Page,
  },
  {
    path: 's543t',   
    canActivate:[ActiveGuard],  
    component: S543tPage,
  },
  {
    path: 's544',   
    canActivate:[ActiveGuard],  
    component: S544Page,
  },
  {
    path: 's545',   
    canActivate:[ActiveGuard],  
    component: S545Page,
  },
  
  {
    path: 's546',   
    canActivate:[ActiveGuard],  
    component: S546Page,
  },
  {
    path: 's546t',   
    canActivate:[ActiveGuard],  
    component: S546tPage,
  },
  {
    path: 's547',   
    canActivate:[ActiveGuard],  
    component: S547Page,
  },
  {
    path: 's548',   
    canActivate:[ActiveGuard],  
    component: S548Page,
  },
  {
    path: 's549',   
    canActivate:[ActiveGuard],  
    component: S549Page,
  },
  {
    path: 's550',   
    canActivate:[ActiveGuard],  
    component: S550Page,
  },
  {
    path: 's550t',   
    canActivate:[ActiveGuard],  
    component: S550tPage,
  },
  {
    path: 's551',   
    canActivate:[ActiveGuard],  
    component: S551Page,
  },
  {
    path: 's552',   
    canActivate:[ActiveGuard],  
    component: S552Page,
  },
  {
    path: 's553',   
    canActivate:[ActiveGuard],  
    component: S553Page,
  },
  {
    path: 's553t',   
    canActivate:[ActiveGuard],  
    component: S553tPage,
  },
  {
    path: 's554',   
    canActivate:[ActiveGuard],  
    component: S554Page,
  },
  {
    path: 's555',   
    canActivate:[ActiveGuard],  
    component: S555Page,
  },
  {
    path: 's555t',   
    canActivate:[ActiveGuard],  
    component: S555tPage,
  },
  {
    path: 's556',   
    canActivate:[ActiveGuard],  
    component: S556Page,
  },
  {
    path: 's557',   
    canActivate:[ActiveGuard],  
    component: S557Page,
  },
  {
    path: 's558',   
    canActivate:[ActiveGuard],  
    component: S558Page,
  },
  {
    path: 's559',   
    canActivate:[ActiveGuard],  
    component: S559Page,
  },
  {
    path: 's560',   
    canActivate:[ActiveGuard],  
    component: S560Page,
  },
  {
    path: 's561',   
    canActivate:[ActiveGuard],  
    component: S561Page,
  },
  {
    path: 's562',   
    canActivate:[ActiveGuard],  
    component: S562Page,
  },
  {
    path: 's563',   
    canActivate:[ActiveGuard],  
    component: S563Page,
  },
  {
    path: 's564',   
    canActivate:[ActiveGuard],  
    component: S564Page,
  },  
  {
    path: 's565',   
    canActivate:[ActiveGuard],  
    component: S565Page,
  },
  {
    path: 's565t',   
    canActivate:[ActiveGuard],  
    component: S565tPage,
  },
  {
    path: 's566',   
    canActivate:[ActiveGuard],  
    component: S566Page,
  },
  {
    path: 's567',   
    canActivate:[ActiveGuard],  
    component: S567Page,
  },
  {
    path: 's568',   
    canActivate:[ActiveGuard],  
    component: S568Page,
  },
  {
    path: 's569',   
    canActivate:[ActiveGuard],  
    component: S569Page,
  },
  {
    path: 's570',   
    canActivate:[ActiveGuard],  
    component: S570Page,
  },
  {
    path: 's571',   
    canActivate:[ActiveGuard],  
    component: S571Page,
  },
  {
    path: 's571t',   
    canActivate:[ActiveGuard],  
    component: S571tPage,
  },
  {
    path: 's572',   
    canActivate:[ActiveGuard],  
    component: S572Page,
  },
  {
    path: 's572t',   
    canActivate:[ActiveGuard],  
    component: S572tPage,
  },  
  {
    path: 's573',   
    canActivate:[ActiveGuard],  
    component: S573Page,
  },
  {
    path: 's574',   
    canActivate:[ActiveGuard],  
    component: S574Page,
  },
  {
    path: 's574t',   
    canActivate:[ActiveGuard],  
    component: S574tPage,
  },
  {
    path: 's575',   
    canActivate:[ActiveGuard],  
    component: S575Page,
  },
  {
    path: 's576',   
    canActivate:[ActiveGuard],  
    component: S576Page,
  },
  {
    path: 's576t',   
    canActivate:[ActiveGuard],  
    component: S576tPage,
  },
  {
    path: 's577',   
    canActivate:[ActiveGuard],  
    component: S577Page,
  },
  {
    path: 's578',   
    canActivate:[ActiveGuard],  
    component: S578Page,
  },
  {
    path: 's579',   
    canActivate:[ActiveGuard],  
    component: S579Page,
  },
  {
    path: 's579t',   
    canActivate:[ActiveGuard],  
    component: S579tPage,
  },
  {
    path: 's580',   
    canActivate:[ActiveGuard],  
    component: S580Page,
  },
  {
    path: 's581',   
    canActivate:[ActiveGuard],  
    component: S581Page,
  },
  {
    path: 's582',   
    canActivate:[ActiveGuard],  
    component: S582Page,
  },
  {
    path: 's583',   
    canActivate:[ActiveGuard],  
    component: S583Page,
  },
  {
    path: 's584',   
    canActivate:[ActiveGuard],  
    component: S584Page,
  },
  {
    path: 's585',   
    canActivate:[ActiveGuard],  
    component: S585Page,
  },
  {
    path: 's586',   
    canActivate:[ActiveGuard],  
    component: S586Page,
  },
  {
    path: 's587',   
    canActivate:[ActiveGuard],  
    component: S587Page,
  }, 
  {
    path: 's587t',   
    canActivate:[ActiveGuard],  
    component: S587tPage,
  }, 
  {
    path: 's588',   
    canActivate:[ActiveGuard],  
    component: S588Page,
  },
  {
    path: 's589',   
    canActivate:[ActiveGuard],  
    component: S589Page,
  },
  {
    path: 's590',   
    canActivate:[ActiveGuard],  
    component: S590Page,
  },
  {
    path: 's591',   
    canActivate:[ActiveGuard],  
    component: S591Page,
  },
  {
    path: 's591t',   
    canActivate:[ActiveGuard],  
    component: S591tPage,
  },
  {
    path: 's592',   
    canActivate:[ActiveGuard],  
    component: S592Page,
  },
  {
    path: 's593',   
    canActivate:[ActiveGuard],  
    component: S593Page,
  },
  {
    path: 's593t',   
    canActivate:[ActiveGuard],  
    component: S593tPage,
  },
  {
    path: 's594',   
    canActivate:[ActiveGuard],  
    component: S594Page,
  },
    {
    path: 's595',   
    canActivate:[ActiveGuard],  
    component: S595Page,
  },
  {
    path: 's596',   
    canActivate:[ActiveGuard],  
    component: S596Page,
  },
  {
    path: 's596t',   
    canActivate:[ActiveGuard],  
    component: S596tPage,
  },
  {
    path: 's597',   
    canActivate:[ActiveGuard],  
    component: S597Page,
  },
  {
    path: 's598',   
    canActivate:[ActiveGuard],  
    component: S598Page,
  },
  {
    path: 's598t',   
    canActivate:[ActiveGuard],  
    component: S598tPage,
  },
  {
    path: 's599',   
    canActivate:[ActiveGuard],  
    component: S599Page,
  },
  {
    path: 's600',   
    canActivate:[ActiveGuard],  
    component: S600Page,
  },
  {
    path: 's601',   
    canActivate:[ActiveGuard],  
    component: S601Page,
  },
  {
    path: 's601t',   
    canActivate:[ActiveGuard],  
    component: S601tPage,
  },
  {
    path: 's602',   
    canActivate:[ActiveGuard],  
    component: S602Page,
  },
  {
    path: 's603',   
    canActivate:[ActiveGuard],  
    component: S603Page,
  },
  {
    path: 's603p1',   
    canActivate:[ActiveGuard],  
    component: S603p1Page,
  },
  {
    path: 's603t',   
    canActivate:[ActiveGuard],  
    component: S603tPage,
  },
  {
    path: 's604',   
    canActivate:[ActiveGuard],  
    component: S604Page,
  },
  {
    path: 's605',   
    canActivate:[ActiveGuard],  
    component: S605Page,
  },
  {
    path: 's605t',   
    canActivate:[ActiveGuard],  
    component: S605tPage,
  },
  {
    path: 's606',   
    canActivate:[ActiveGuard],  
    component: S606Page,
  },
  {
    path: 's606t',   
    canActivate:[ActiveGuard],  
    component: S606tPage,
  },
  {
    path: 's607',   
    canActivate:[ActiveGuard],  
    component: S607Page,
  },
  {
    path: 's608',   
    canActivate:[ActiveGuard],  
    component: S608Page,
  },
  {
    path: 's609',   
    canActivate:[ActiveGuard],  
    component: S609Page,
  },
  {
    path: 's609p1',   
    canActivate:[ActiveGuard],  
    component: S609p1Page,
  },
  {
    path: 's609t',   
    canActivate:[ActiveGuard],  
    component: S609tPage,
  },
  {
    path: 's609p1',   
    canActivate:[ActiveGuard],  
    component: S609p1Page,
  },
  {
    path: 's609t',   
    canActivate:[ActiveGuard],  
    component: S609tPage,
  },
  {
    path: 's610',   
    canActivate:[ActiveGuard],  
    component: S610Page,
  },
  {
    path: 's611',   
    canActivate:[ActiveGuard],  
    component: S611Page,
  },
  {
    path: 's612',   
    canActivate:[ActiveGuard],  
    component: S612Page,
  },
  {
    path: 's613',   
    canActivate:[ActiveGuard],  
    component: S613Page,
  },
  {
    path: 's614',   
    canActivate:[ActiveGuard],  
    component: S614Page,
  },
  {
    path: 's614p1',   
    canActivate:[ActiveGuard],  
    component: S614p1Page,
  },
  {
    path: 's614p3',   
    canActivate:[ActiveGuard],  
    component: S614p3Page,
  },
  {
    path: 's614p4',   
    canActivate:[ActiveGuard],  
    component: S614p4Page,
  },
  {
    path: 's614p5',   
    canActivate:[ActiveGuard],  
    component: S614p5Page,
  },
  {
    path: 's614p01',   
    canActivate:[ActiveGuard],  
    component: S614p01Page,
  },
  {
    path: 's615',   
    canActivate:[ActiveGuard],  
    component: S615Page,
  },
  {
    path: 's615p1',   
    canActivate:[ActiveGuard],  
    component: S615p1Page,
  },
  {
    path: 's615p2',   
    canActivate:[ActiveGuard],  
    component: S615p2Page,
  },
  {
    path: 's615p3',   
    canActivate:[ActiveGuard],  
    component: S615p3Page,
  },
  {
    path: 's615p4',   
    canActivate:[ActiveGuard],  
    component: S615p4Page,
  },
  {
    path: 's616',   
    canActivate:[ActiveGuard],  
    component: S616Page,
  },
  {
    path: 's616p1',   
    canActivate:[ActiveGuard],  
    component: S616p1Page,
  },
  {
    path: 's617',   
    canActivate:[ActiveGuard],  
    component: S617Page,
  },
  {
    path: 's614p2',
    canActivate:[ActiveGuard],  
    component: S614p2Page,
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FearAnxietyRoutingModule { }
