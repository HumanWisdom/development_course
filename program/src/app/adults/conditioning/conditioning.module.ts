import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S232Page } from './s232/s232.page';
import { S233Page } from './s233/s233.page';
import { S234Page } from './s234/s234.page';
import { S235Page } from './s235/s235.page';
import { S235tPage } from './s235t/s235t.page';
import { S236Page } from './s236/s236.page';
import { S237Page } from './s237/s237.page';
import { S238Page } from './s238/s238.page';
import { S238tPage } from './s238t/s238t.page';
import { S239Page } from './s239/s239.page';
import { S240Page } from './s240/s240.page';
import { S240p1Page } from './s240p1/s240p1.page';
import { S240p2Page } from './s240p2/s240p2.page';
import { S240p3Page } from './s240p3/s240p3.page';
import { S240p4Page } from './s240p4/s240p4.page';
import { S240p5Page } from './s240p5/s240p5.page';
import { S240p6Page } from './s240p6/s240p6.page';
import { S240p7Page } from './s240p7/s240p7.page';
import { S240p8Page } from './s240p8/s240p8.page';
import { S240p9Page } from './s240p9/s240p9.page';
import { S240p10Page } from './s240p10/s240p10.page';
import { S240p11Page } from './s240p11/s240p11.page';
import { S241Page } from './s241/s241.page';
import { S242Page } from './s242/s242.page';
import { S243Page } from './s243/s243.page';
import { S243tPage } from './s243t/s243t.page';
import { S244Page } from './s244/s244.page';
import { S245Page } from './s245/s245.page';
import { S246Page } from './s246/s246.page';
import { S247Page } from './s247/s247.page';
import { S248Page } from './s248/s248.page';
import { S249Page } from './s249/s249.page';
import { S249tPage } from './s249t/s249t.page';
import { S250Page } from './s250/s250.page';
import { S251Page } from './s251/s251.page';
import { S252Page } from './s252/s252.page';
import { S253Page } from './s253/s253.page';
import { S254Page } from './s254/s254.page';
import { S255Page } from './s255/s255.page';
import { S256Page } from './s256/s256.page';
import { S257Page } from './s257/s257.page';
import { S257tPage } from './s257t/s257t.page';
import { S258Page } from './s258/s258.page';
import { S259Page } from './s259/s259.page';
import { S260Page } from './s260/s260.page';
import { S260tPage } from './s260t/s260t.page';
import { S261Page } from './s261/s261.page';
import { S262Page } from './s262/s262.page';
import { S263Page } from './s263/s263.page';
import { S264Page } from './s264/s264.page';
import { S265Page } from './s265/s265.page';
import { S266Page } from './s266/s266.page';
import { S267Page } from './s267/s267.page';
import { S268Page } from './s268/s268.page';
import { S268tPage } from './s268t/s268t.page';
import { S269Page } from './s269/s269.page';
import { S269tPage } from './s269t/s269t.page';
import { S270Page } from './s270/s270.page';
import { S271Page } from './s271/s271.page';
import { S272Page } from './s272/s272.page';
import { S273Page } from './s273/s273.page';
import { S273tPage } from './s273t/s273t.page';
import { S274Page } from './s274/s274.page';
import { S275Page } from './s275/s275.page';
import { S275tPage } from './s275t/s275t.page';
import { S276Page } from './s276/s276.page';
import { S277Page } from './s277/s277.page';
import { S278Page } from './s278/s278.page';
import { S279Page } from './s279/s279.page';
import { S280Page } from './s280/s280.page';
import { S281Page } from './s281/s281.page';
import { S281tPage } from './s281t/s281t.page';
import { S282Page } from './s282/s282.page';
import { S283Page } from './s283/s283.page';
import { S284Page } from './s284/s284.page';
import { S284tPage } from './s284t/s284t.page';
import { S285Page } from './s285/s285.page';
import { S286Page } from './s286/s286.page';
import { S287Page } from './s287/s287.page';
import { S288Page } from './s288/s288.page';
import { S289Page } from './s289/s289.page';
import { S290Page } from './s290/s290.page';
import { S290tPage } from './s290t/s290t.page';
import { S291Page } from './s291/s291.page';
import { S292Page } from './s292/s292.page';
import { S293Page } from './s293/s293.page';
import { S294Page } from './s294/s294.page';
import { S294p1Page } from './s294p1/s294p1.page';
import { S295Page } from './s295/s295.page';
import { S296Page } from './s296/s296.page';
import { S297Page } from './s297/s297.page';
import { S297tPage } from './s297t/s297t.page';
import { S298Page } from './s298/s298.page';
import { S298tPage } from './s298t/s298t.page';
import { S299Page } from './s299/s299.page';
import { S300Page } from './s300/s300.page';
import { S301Page } from './s301/s301.page';
import { S302Page } from './s302/s302.page';
import { S303Page } from './s303/s303.page';
import { S304Page } from './s304/s304.page';
import { S305Page } from './s305/s305.page';
import { S306Page } from './s306/s306.page';
import { S307Page } from './s307/s307.page';
import { S308Page } from './s308/s308.page';
import { S309Page } from './s309/s309.page';
import { S310Page } from './s310/s310.page';
import { S311Page } from './s311/s311.page';
import { S312Page } from './s312/s312.page';
import { S313Page } from './s313/s313.page';
import { S314Page } from './s314/s314.page';
import { S315Page } from './s315/s315.page';
import { S316Page } from './s316/s316.page';
import { S317Page } from './s317/s317.page';
import { S318Page } from './s318/s318.page';
import { S319Page } from './s319/s319.page';
import { S320Page } from './s320/s320.page';
import { S321Page } from './s321/s321.page';
import { S321p1Page } from './s321p1/s321p1.page';
import { S321p2Page } from './s321p2/s321p2.page';
import { S321p3Page } from './s321p3/s321p3.page';
import { S322Page } from './s322/s322.page';
import { S323Page } from './s323/s323.page';

import { ConditioningRoutingModule } from './conditioning-routing.module';

@NgModule({
  declarations: [
    S232Page,
    S233Page,
    S234Page,
    S235Page,
    S235tPage,
    S236Page,
    S237Page,
    S238Page,
    S238tPage,
    S239Page,
    S240Page,
    S240p1Page,
    S240p2Page,
    S240p3Page,
    S240p4Page,
    S240p5Page,
    S240p6Page,
    S240p7Page,
    S240p8Page,
    S240p9Page,
    S240p10Page,
    S240p11Page,
    S241Page,
    S242Page,
    S243Page,
    S243tPage,
    S244Page,
    S245Page,
    S246Page,
    S247Page,
    S248Page,
    S249Page,
    S249tPage,
    S250Page,
    S251Page,
    S252Page,
    S253Page,
    S254Page,
    S255Page,
    S256Page,
    S257Page,
    S257tPage,
    S258Page,
    S259Page,
    S260Page,
    S260tPage,
    S261Page,
    S262Page,
    S263Page,
    S264Page,
    S265Page,
    S266Page,
    S267Page,
    S268Page,
    S268tPage,
    S269Page,
    S269tPage,
    S270Page,
    S271Page,
    S272Page,
    S273Page,
    S273tPage,
    S274Page,
    S275Page,
    S275tPage,
    S276Page,
    S277Page,
    S278Page,
    S279Page,
    S280Page,
    S281Page,
    S281tPage,
    S282Page,
    S283Page,
    S284Page,
    S284tPage,
    S285Page,
    S286Page,
    S287Page,
    S288Page,
    S289Page,
    S290Page,
    S290tPage,
    S291Page,
    S292Page,
    S293Page,
    S294Page,
    S294p1Page,
    S295Page,
    S296Page,
    S297Page,
    S297tPage,
    S298Page,
    S298tPage,
    S299Page,
    S300Page,
    S301Page,
    S302Page,
    S303Page,
    S304Page,
    S305Page,
    S306Page,
    S307Page,
    S308Page,
    S309Page,
    S310Page,
    S311Page,
    S312Page,
    S313Page,
    S314Page,
    S315Page,
    S316Page,
    S317Page,
    S318Page,
    S319Page,
    S320Page,
    S321Page,
    S321p1Page,
    S321p2Page,
    S321p3Page,
    S322Page,
    S323Page,    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ConditioningRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class ConditioningModule { }
