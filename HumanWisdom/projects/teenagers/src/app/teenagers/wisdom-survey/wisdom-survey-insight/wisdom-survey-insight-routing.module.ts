import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WisdomSurveyInsightComponent } from './wisdom-survey-insight.component';

const routes: Routes = [{
  path: '',
  component: WisdomSurveyInsightComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomSurveyInsightRoutingModule { }
