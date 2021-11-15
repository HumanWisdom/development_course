import { AffiliateComponent } from './affiliate/affiliate.component';
import { AffiliateAllUsersComponent } from './affiliate-all-users/affiliate-all-users.component';
import { MyAffiliateComponent } from './my-affiliate/my-affiliate.component';
import { ViewAffiliateComponent } from './view-affiliate/view-affiliate.component';
import { ManagePopupComponent } from './manage-popup/manage-popup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {FaqComponent} from './faq/faq.component'
import {PricingComponent} from './pricing/pricing.component'
import {SectionComponent} from './section/section.component'
import {ForumComponent} from './forum/forum.component'
import {ModulesComponent} from './modules/modules.component'
import {ModeratorComponent} from './moderator/moderator.component'
import {ProgramComponent} from './program/program.component'
import {ReflectionComponent} from './reflection/reflection.component'
import {SubscriptionComponent} from './subscription/subscription.component'
import {AssessmentComponent} from './assessment/assessment.component'
import {QuestionComponent} from './question/question.component'
import {CategoryComponent} from './category/category.component'
import {GroupComponent} from './group/group.component'
import {CouponsComponent} from './coupons/coupons.component'
import {PointsComponent} from './points/points.component'
import {TagsComponent} from './tags/tags.component'
import {ScenariosComponent} from './scenarios/scenarios.component'
import {KeysComponent} from './keys/keys.component'
import {TestimonialsComponent} from './testimonials/testimonials.component'
import {ScreensComponent} from './screens/screens.component'
import {SitesectionsComponent} from './sitesections/sitesections.component'
import {DailyquestionComponent} from './dailyquestion/dailyquestion.component'
import {OptionsComponent} from './options/options.component'
import {ModulePercentComponent} from './module-percent/module-percent.component'
import { SessionComponent } from './session/session.component';
import { AllotScreensComponent } from './allot-screens/allot-screens.component';
import { ForumsComponent } from './forums/forums.component';





const routes: Routes = [
 {
  path:'',
  component: HomeComponent
 },
 {
  path: "faq",
  component: FaqComponent
},
{
  path: "pricing",
  component: PricingComponent
},
{
  path: "popup",
  component: ManagePopupComponent
},
{
  path: "affiliate",
  component: AffiliateComponent
},
{
  path: "affiliate-all-users/:id",
  component: AffiliateAllUsersComponent
},
{
  path: "my-affiliate/:id",
  component: MyAffiliateComponent
},
{
  path: "view-affiliate",
  component: ViewAffiliateComponent
},
{
  path: "section",
  component: SectionComponent
},
{
  path: "modules",
  component: ModulesComponent
},
{
  path: "forum",
  component: ForumComponent
},
{
  path: "forums",
  component: ForumsComponent
},
{
  path: "program",
  component: ProgramComponent
},
{
  path: "moderator",
  component: ModeratorComponent
},
{
  path: "reflection",
  component: ReflectionComponent
},
{
  path: "subscription",
  component: SubscriptionComponent
},
{
  path: "assessment",
  component: AssessmentComponent
},
{
  path: "question",
  component: QuestionComponent
},
{
  path: "category",
  component: CategoryComponent
},
{
  path: "wisdomGroup",
  component: GroupComponent
},
{
  path: "coupons",
  component: CouponsComponent
},
{
  path: "points",
  component: PointsComponent
},
{
  path: "tags",
  component: TagsComponent
},
{
  path: "scenarios",
  component: ScenariosComponent
},
{
  path: "keys",
  component: KeysComponent
},
{
  path: "testimonials",
  component: TestimonialsComponent
},
{
  path: "screens",
  component: ScreensComponent
},
{
  path: "sitesections",
  component: SitesectionsComponent
},
{
  path: "dailyquestion",
  component: DailyquestionComponent
},
{
  path: "options",
  component: OptionsComponent
},
{
  path: "module-percent",
  component: ModulePercentComponent
},
{
  path: "session",
  component: SessionComponent
},
{
  path: "allotScreen",
  component: AllotScreensComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
