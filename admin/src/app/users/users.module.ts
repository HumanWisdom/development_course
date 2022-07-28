import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import { FaqComponent } from './faq/faq.component';
import { PricingComponent } from './pricing/pricing.component';
import { SectionComponent } from './section/section.component';
import { ModulesComponent } from './modules/modules.component';
import { ForumComponent } from './forum/forum.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { ProgramComponent } from './program/program.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReflectionComponent } from './reflection/reflection.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { QuestionComponent } from './question/question.component';
import { CategoryComponent } from './category/category.component';
import { GroupComponent } from './group/group.component';
import { CouponsComponent } from './coupons/coupons.component';
import { PointsComponent } from './points/points.component';
import { TagsComponent } from './tags/tags.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { KeysComponent } from './keys/keys.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ScreensComponent } from './screens/screens.component';
import { SitesectionsComponent } from './sitesections/sitesections.component';
import { DailyquestionComponent } from './dailyquestion/dailyquestion.component';
import { OptionsComponent } from './options/options.component';
import { ModulePercentComponent } from './module-percent/module-percent.component';
import { SessionComponent } from './session/session.component';
import { AllotScreensComponent } from './allot-screens/allot-screens.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { AffiliateAllUsersComponent } from './affiliate-all-users/affiliate-all-users.component';
import { MyAffiliateComponent } from './my-affiliate/my-affiliate.component';
import { ViewAffiliateComponent } from './view-affiliate/view-affiliate.component';
import { ManagePopupComponent } from './manage-popup/manage-popup.component';
import { NgxEditorModule } from 'ngx-editor';
import { ForumsComponent } from './forums/forums.component';
import { BlogComponent } from './blog/blog.component';
import { DailypractiseComponent } from './dailypractise/dailypractise.component';
import { GuidedquestionComponent } from './guidedquestion/guidedquestion.component';
import { GuidedquestiontopicsComponent } from './guidedquestiontopics/guidedquestiontopics.component';
import { NotificationTypeComponent } from './notification-type/notification-type.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [HomeComponent, FaqComponent, PricingComponent, SectionComponent, ModulesComponent, ForumComponent, ModeratorComponent, ProgramComponent, ReflectionComponent, SubscriptionComponent, AssessmentComponent, QuestionComponent, CategoryComponent, GroupComponent, CouponsComponent, PointsComponent, TagsComponent, ScenariosComponent, KeysComponent, TestimonialsComponent, ScreensComponent, SitesectionsComponent, DailyquestionComponent, OptionsComponent, ModulePercentComponent, SessionComponent, AllotScreensComponent, AffiliateComponent, AffiliateAllUsersComponent, MyAffiliateComponent, ViewAffiliateComponent, ManagePopupComponent, ForumsComponent, BlogComponent, DailypractiseComponent, GuidedquestionComponent,GuidedquestiontopicsComponent, NotificationTypeComponent,
  NotificationComponent
],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule, 
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }
