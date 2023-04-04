import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S95001Page } from './s95001/s95001.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../shared/shared.module';
import { BenefitsOfEnquiryRoutingModule } from './benefits-of-enquiry-routing.module';
import { S95002Page } from './s95002/s95002.page';
import { S95008Page } from './s95008/s95008.page';
import { S95003Page } from './s95003/s95003.page';
import { S95003tPage } from './s95003t/s95003t.page';
import { S95004Page } from './s95004/s95004.page';
import { S95005Page } from './s95005/s95005.page';
import { S95006Page } from './s95006/s95006.page';
import { S95006tPage } from './s95006t/s95006t.page';
import { S95007Page } from './s95007/s95007.page';
import { S95010Page } from './s95010/s95010.page';
import { S95010tPage } from './s95010t/s95010t.page';
import { S95011Page } from './s95011/s95011.page';
import { S95012Page } from './s95012/s95012.page';
import { S95013Page } from './s95013/s95013.page';
import { S95013tPage } from './s95013t/s95013t.page';
import { S95014Page } from './s95014/s95014.page';
import { S95015Page } from './s95015/s95015.page';
import { S95016Page } from './s95016/s95016.page';
import { S95016tPage } from './s95016t/s95016t.page';
import { S95017Page } from './s95017/s95017.page';
import { S95018Page } from './s95018/s95018.page';
import { S95018tPage } from './s95018t/s95018t.page';
import { S95019Page } from './s95019/s95019.page';
import { S95020Page } from './s95020/s95020.page';
import { S95021Page } from './s95021/s95021.page';
import { S95027Page } from './s95027/s95027.page';
import { S95028Page } from './s95028/s95028.page';
import { TeenagersService } from '../teenagers.service';
import { S95009Page } from './s95009/s95009.page';
import { S95024Page } from './s95024/s95024.page';
import { S95025Page } from './s95025/s95025.page';
import { S95026Page } from './s95026/s95026.page';
import { S95022Page } from './s95022/s95022.page';
import { S95023Page } from './s95023/s95023.page';



@NgModule({
  declarations: [S95001Page, S95002Page, S95003Page, S95003tPage, S95004Page, S95005Page, S95006Page, S95006tPage, S95007Page,
    S95008Page,S95009Page, S95010Page, S95010tPage, S95011Page, S95012Page, S95013Page, S95013tPage, S95014Page,
    S95015Page, S95016Page, S95016tPage, S95017Page, S95018Page, S95018tPage, S95019Page, S95020Page,
    S95021Page, S95022Page,  S95023Page,  S95024Page,  S95025Page,  S95026Page,  S95027Page, S95028Page
  ],
  providers:[
    TeenagersService
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BenefitsOfEnquiryRoutingModule
  ]
})
export class BenefitsOfEnquiryModule { }
