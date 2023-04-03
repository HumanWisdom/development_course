import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S95001Page } from './s95001/s95001.page';
import { S95002Page } from './s95002/s95002.page';
import { S95003Page } from './s95003/s95003.page';
import { S95003tPage } from './s95003t/s95003t.page';
import { S95004Page } from './s95004/s95004.page';
import { S95005Page } from './s95005/s95005.page';
import { S95006Page } from './s95006/s95006.page';
import { S95006tPage } from './s95006t/s95006t.page';
import { S95007Page } from './s95007/s95007.page';
import { S95008Page } from './s95008/s95008.page';
import { S95009Page } from './s95009/s95009.page';
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
import { S95022Page } from './s95022/s95022.page';
import { S95023Page } from './s95023/s95023.page';
import { S95024Page } from './s95024/s95024.page';
import { S95025Page } from './s95025/s95025.page';
import { S95026Page } from './s95026/s95026.page';
import { S95027Page } from './s95027/s95027.page';
import { S95028Page } from './s95028/s95028.page';
const routes: Routes = [
  {
    path: '',
    component:S95001Page
  },
  {
    path: 's95001',
    component:S95001Page
  },
  {
    path: 's95002',
    component:S95002Page
  },
  {
    path: 's95003',
    component:S95003Page
  },
  {
    path: 's95003t',
    component:S95003tPage
  },
  {
    path: 's95004',
    component:S95004Page
  },
  {
    path: 's95005',
    component:S95005Page
  },
  {
    path: 's95006',
    component:S95006Page
  },
  {
    path: 's95006t',
    component:S95006tPage
  },
  {
    path: 's95007',
    component:S95007Page
  },
  {
    path: 's95008',
    component:S95008Page
  },
  {
    path: 's95009',
    component:S95009Page
  },
  {
    path: 's95010',
    component:S95010Page
  },
  {
    path: 's95010t',
    component:S95010tPage
  },
  {
    path: 's95011',
    component:S95011Page
  },
  {
    path: 's95012',
    component:S95012Page
  },
  {
    path: 's95013',
    component:S95013Page
  },
  {
    path: 's95013t',
    component:S95013tPage
  },
  {
    path: 's95014',
    component:S95014Page
  },
  {
    path: 's95015',
    component:S95015Page
  },
  {
    path: 's95016',
    component:S95016Page
  },
  {
    path: 's95016t',
    component:S95016tPage
  },
  {
    path: 's95017',
    component:S95017Page
  },
  {
    path: 's95018',
    component:S95018Page
  },
  {
    path: 's95018t',
    component:S95018tPage
  },
  {
    path: 's95019',
    component:S95019Page
  },
  {
    path: 's95020',
    component:S95020Page
  },
  {
    path: 's95021',
    component:S95021Page
  },
  {
    path: 's95022',
    component:S95022Page
  },
  {
    path: 's95023',
    component:S95023Page
  },
  {
    path: 's95024',
    component:S95024Page
  },
  {
    path: 's95025',
    component:S95025Page
  },
  {
    path: 's95026',
    component:S95026Page
  },
  {
    path: 's95027',
    component:S95027Page
  },
  {
    path: 's95028',
    component:S95028Page
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenefitsOfEnquiryRoutingModule { }
