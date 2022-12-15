import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { CriticismRoutingModule } from './criticism-routing.module';

import { S324Page } from './s324/s324.page';
import { S325Page } from './s325/s325.page';
import { S326Page } from './s326/s326.page';
import { S327Page } from './s327/s327.page';
import { S327tPage } from './s327t/s327t.page';
import { S328Page } from './s328/s328.page';
import { S329Page } from './s329/s329.page';
import { S330Page } from './s330/s330.page';
import { S331Page } from './s331/s331.page';
import { S331tPage } from './s331t/s331t.page';
import { S332Page } from './s332/s332.page';
import { S333Page } from './s333/s333.page';
import { S334Page } from './s334/s334.page';
import { S335Page } from './s335/s335.page';
import { S336Page } from './s336/s336.page';
import { S337Page } from './s337/s337.page';
import { S338Page } from './s338/s338.page';
import { S339Page } from './s339/s339.page';
import { S340Page } from './s340/s340.page';
import { S340tPage } from './s340t/s340t.page';
import { S341Page } from './s341/s341.page';
import { S342Page } from './s342/s342.page';
import { S342tPage } from './s342t/s342t.page';
import { S343Page } from './s343/s343.page';
import { S344Page } from './s344/s344.page';
import { S345Page } from './s345/s345.page';
import { S346Page } from './s346/s346.page';
import { S347Page } from './s347/s347.page';
import { S348Page } from './s348/s348.page';
import { S349Page } from './s349/s349.page';
import { S350Page } from './s350/s350.page';
import { S351Page } from './s351/s351.page';
import { S352Page } from './s352/s352.page';
import { S353Page } from './s353/s353.page';
import { S354Page } from './s354/s354.page';
import { S355Page } from './s355/s355.page';
import { S356Page } from './s356/s356.page';
import { S357Page } from './s357/s357.page';
import { S357tPage } from './s357t/s357t.page';
import { S358Page } from './s358/s358.page';
import { S359Page } from './s359/s359.page';
import { S360Page } from './s360/s360.page';
import { S361Page } from './s361/s361.page';
import { S361tPage } from './s361t/s361t.page';
import { S362Page } from './s362/s362.page';
import { S363Page } from './s363/s363.page';
import { S363tPage } from './s363t/s363t.page';
import { S364Page } from './s364/s364.page';
import { S365Page } from './s365/s365.page';
import { S366Page } from './s366/s366.page';
import { S366p0Page } from './s366p0/s366p0.page';
import { S367Page } from './s367/s367.page';
import { S368Page } from './s368/s368.page';
import { S369Page } from './s369/s369.page';
import { S369tPage } from './s369t/s369t.page';
import { S370Page } from './s370/s370.page';
import { S371Page } from './s371/s371.page';
import { S372Page } from './s372/s372.page';
import { S373Page } from './s373/s373.page';
import { S374Page } from './s374/s374.page';
import { S375Page } from './s375/s375.page';
import { S376Page } from './s376/s376.page';
import { S377Page } from './s377/s377.page';
import { S378Page } from './s378/s378.page';
import { S378tPage } from './s378t/s378t.page';
import { S379Page } from './s379/s379.page';
import { S379tPage } from './s379t/s379t.page';
import { S380Page } from './s380/s380.page';
import { S380tPage } from './s380t/s380t.page';
import { S381Page } from './s381/s381.page';
import { S381tPage } from './s381t/s381t.page';
import { S382Page } from './s382/s382.page';
import { S382tPage } from './s382t/s382t.page';
import { S383Page } from './s383/s383.page';
import { S384Page } from './s384/s384.page';
import { S384tPage } from './s384t/s384t.page';
import { S385Page } from './s385/s385.page';
import { S385tPage } from './s385t/s385t.page';
import { S386Page } from './s386/s386.page';
import { S387Page } from './s387/s387.page';
import { S388Page } from './s388/s388.page';
import { S388tPage } from './s388t/s388t.page';
import { S389Page } from './s389/s389.page';
import { S390Page } from './s390/s390.page';
import { S391Page } from './s391/s391.page';
import { S392Page } from './s392/s392.page';
import { S393Page } from './s393/s393.page';
import { S394Page } from './s394/s394.page';
import { S395Page } from './s395/s395.page';
import { S395tPage } from './s395t/s395t.page';
import { S396Page } from './s396/s396.page';
import { S397Page } from './s397/s397.page';
import { S398Page } from './s398/s398.page';
import { S399Page } from './s399/s399.page';
import { S400Page } from './s400/s400.page';
import { S401Page } from './s401/s401.page';
import { S402Page } from './s402/s402.page';
import { S402tPage } from './s402t/s402t.page';
import { S403Page } from './s403/s403.page';
import { S404Page } from './s404/s404.page';
import { S404tPage } from './s404t/s404t.page';
import { S405Page } from './s405/s405.page';
import { S405tPage } from './s405t/s405t.page';
import { S406Page } from './s406/s406.page';
import { S406tPage } from './s406t/s406t.page';
import { S407Page } from './s407/s407.page';
import { S407tPage } from './s407t/s407t.page';
import { S408Page } from './s408/s408.page';
import { S408tPage } from './s408t/s408t.page';
import { S409Page } from './s409/s409.page';
import { S409tPage } from './s409t/s409t.page';
import { S410Page } from './s410/s410.page';
import { S410tPage } from './s410t/s410t.page';
import { S411Page } from './s411/s411.page';
import { S412Page } from './s412/s412.page';
import { S412tPage } from './s412t/s412t.page';
import { S413Page } from './s413/s413.page';
import { S414Page } from './s414/s414.page';
import { S415Page } from './s415/s415.page';
import { S416Page } from './s416/s416.page';
import { S417Page } from './s417/s417.page';
import { S418Page } from './s418/s418.page';
import { S418tPage } from './s418t/s418t.page';
import { S418p0Page } from './s418p0/s418p0.page';
import { S419Page } from './s419/s419.page';
import { S420Page } from './s420/s420.page';
import { S421Page } from './s421/s421.page';
import { S422Page } from './s422/s422.page';
import { S423Page } from './s423/s423.page';
import { S424Page } from './s424/s424.page';
import { S425Page } from './s425/s425.page';
import { S426Page } from './s426/s426.page';
import { S427Page } from './s427/s427.page';
import { S428Page } from './s428/s428.page';
import { S429Page } from './s429/s429.page';
import { S430Page } from './s430/s430.page';
import { S431Page } from './s431/s431.page';
import { S432Page } from './s432/s432.page';

@NgModule({
  declarations: [
    S324Page,
    S325Page,
    S326Page,
    S327Page,
    S327tPage,
    S328Page,
    S329Page,
    S330Page,
    S331Page,
    S331tPage,
    S332Page,
    S333Page,
    S334Page,
    S335Page,
    S336Page,
    S337Page,
    S338Page,
    S339Page,
    S340Page,
    S340tPage,
    S341Page,
    S342Page,
    S342tPage,
    S343Page,
    S344Page,
    S345Page,
    S346Page,
    S347Page,
    S348Page,
    S349Page,
    S350Page,
    S351Page,
    S352Page,
    S353Page,
    S354Page,
    S355Page,
    S356Page,
    S357Page,
    S357tPage,
    S358Page,
    S359Page,
    S360Page,
    S361Page,
    S361tPage,
    S362Page,
    S363Page,
    S363tPage,
    S364Page,
    S365Page,
    S366Page,
    S366p0Page,
    S367Page,
    S368Page,
    S369Page,
    S369tPage,
    S370Page,
    S371Page,
    S372Page,
    S373Page,
    S374Page,
    S375Page,
    S376Page,
    S377Page,
    S378Page,
    S378tPage,
    S379Page,
    S379tPage,
    S380Page,
    S380tPage,
    S381Page,
    S381tPage,
    S382Page,
    S382tPage,
    S383Page,
    S384Page,
    S384tPage,
    S385Page,
    S385tPage,
    S386Page,
    S387Page,
    S388Page,
    S388tPage,
    S389Page,
    S390Page,
    S391Page,
    S392Page,
    S393Page,
    S394Page,
    S395Page,
    S395tPage,
    S396Page,
    S397Page,
    S398Page,
    S399Page,
    S400Page,
    S401Page,
    S402Page,
    S402tPage,
    S403Page,
    S404Page,
    S404tPage,
    S405Page,
    S405tPage,
    S406Page,
    S406tPage,
    S407Page,
    S407tPage,
    S408Page,
    S408tPage,
    S409Page,
    S409tPage,
    S410Page,
    S410tPage,
    S411Page,
    S412Page,
    S412tPage,
    S413Page,
    S414Page,
    S415Page,
    S416Page,
    S417Page,
    S418Page,
    S418tPage,
    S418p0Page,
    S419Page,
    S420Page,
    S421Page,
    S422Page,
    S423Page,
    S424Page,
    S425Page,
    S426Page,
    S427Page,
    S428Page,
    S429Page,
    S430Page,
    S431Page,
    S432Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CriticismRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class CriticismModule { }
