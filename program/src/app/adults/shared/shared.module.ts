import { RelatedWisdomStoriesTilesComponent } from './component/related-wisdom-stories-tiles/related-wisdom-stories-tiles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TnCrossComponent} from './component/tn-cross/tn-cross.component'
import { TnEditBookmarkShareComponent } from '../shared/component/tn-edit-bookmark-share/tn-edit-bookmark-share.component'
import { FtPrevNextComponent } from '../shared/component/ft-prev-next/ft-prev-next.component'
import { FtPrevComponent } from '../shared/component/ft-prev/ft-prev.component'
import { TnTranscriptListenComponent } from '../shared/component/tn-transcript-listen/tn-transcript-listen.component'
import { BotnavComponent } from './component/botnav/botnav.component'
import { TextComponent } from './component/text/text.component'
import { ReflectionComponent } from './component/reflection/reflection.component'
import { CourseHeaderComponent } from './component/course-header/course-header.component'
import { NgxCircularPlayerModule } from 'ngx-circular-player';
import { CourseFooterComponent } from './component/course-footer/course-footer.component'
import { QuotationComponent } from './component/quotation/quotation.component'
import { BottomNavigationComponent } from './component/bottom-navigation/bottom-navigation.component'
import { IndexContentComponent } from './component/index-content/index-content.component'
import { TapStartComponent } from './component/tap-start/tap-start.component'
import { VideoContentComponent } from './component/video-content/video-content.component'
import { SimpleTextComponent } from './component/simple-text/simple-text.component'
import { LengthyTextComponent } from './component/lengthy-text/lengthy-text.component'
import { OnelineTextComponent } from './component/oneline-text/oneline-text.component'
import { KtaDoneComponent } from './component/kta-done/kta-done.component'
import { KtaFooterComponent } from './component/kta-footer/kta-footer.component'
import { KtaPrevnextComponent } from './component/kta-prevnext/kta-prevnext.component'
import { SessionoverS1Component } from './component/sessionover-s1/sessionover-s1.component'
import { SessionoverS2Component } from './component/sessionover-s2/sessionover-s2.component'
import { AudioHeaderComponent } from './component/audio-header/audio-header.component' 
import { AudioContentComponent } from './component/audio-content/audio-content.component' 
import { TranscriptHeaderComponent } from  './component/transcript-header/transcript-header.component'
import { TranscriptContentComponent } from  './component/transcript-content/transcript-content.component'
import { PyramidContentComponent } from  './component/pyramid-content/pyramid-content.component'
import { YesnoComponent } from './component/yesno/yesno.component'
import { SingleSelectComponent } from './component/single-select/single-select.component'
import { MultiSelectComponent } from './component/multi-select/multi-select.component'
import { FeedbackQuestionComponent } from './component/feedback-question/feedback-question.component'
import { ProgressSliderComponent } from './component/progress-slider/progress-slider.component'
import { LikertScaleComponent } from './component/likert-scale/likert-scale.component'
import { BeginSurveyComponent } from './component/begin-survey/begin-survey.component'
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ImageTextComponent } from './component/image-text/image-text.component'
import { ImageAudioComponent } from './component/image-audio/image-audio.component'
import { AudioElementComponent } from './component/audio-element/audio-element.component'
import { IndexFooterComponent } from './component/index-footer/index-footer.component'
import { FeedbackFooterComponent } from './component/feedback-footer/feedback-footer.component'
import { ProgressSlider3Component } from './component/progress-slider3/progress-slider3.component'
import { AudioCirclesComponent } from './component/audio-circles/audio-circles.component'
import { FiveCirclesComponent } from './component/five-circles/five-circles.component'
//import { NgxSocialShareModule } from 'ngx-social-share';
import { SessionEndComponent } from './component/session-end/session-end.component'
import { ModuleEndComponent } from './component/module-end/module-end.component'
import { TxtOverlayTopComponent } from './component/txt-overlay-top/txt-overlay-top.component'
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons'
import { EndHeaderComponent } from './component/end-header/end-header.component'
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FeatureHeaderComponent } from './component/feature-header/feature-header.component';
import { ProgramContentComponent } from './component/program-content/program-content.component'
import { RouterModule } from '@angular/router';
import { AudioImageOverlayComponent } from './component/audio-image-overlay/audio-image-overlay.component'
import { OnlySliderComponent } from './component/only-slider/only-slider.component'
import { AudioBucketComponent } from './component/audio-bucket/audio-bucket.component'
import { AudioBulletComponent } from './component/audio-bullet/audio-bullet.component'
import { AudioDiagramComponent } from './component/audio-diagram/audio-diagram.component'
import { TopnavComponent } from 'src/app/onboarding/shared/component/topnav/topnav.component';
import { TocHeaderComponent } from '../shared/component/toc-header/toc-header.component';
import { TocTopnavComponent } from '../shared/component/toc-topnav/toc-topnav.component';
import { TnHwpProjectComponent } from './component/tn-hwp-project/tn-hwp-project.component';
@NgModule({
  declarations: [
    TnCrossComponent,
    TnEditBookmarkShareComponent,
    FtPrevNextComponent,
    FtPrevComponent,
    TnTranscriptListenComponent,
    BotnavComponent,
    TextComponent,
    ReflectionComponent,
    CourseHeaderComponent,   
    CourseFooterComponent,
    QuotationComponent,    
    BottomNavigationComponent,
    IndexContentComponent,
    TapStartComponent,
    VideoContentComponent,
    SimpleTextComponent,
    LengthyTextComponent,
    OnelineTextComponent,
    KtaDoneComponent,
    KtaFooterComponent,
    KtaPrevnextComponent,
    SessionoverS1Component,
    SessionoverS2Component,
    AudioHeaderComponent,
    AudioContentComponent,
    TranscriptHeaderComponent,
    TranscriptContentComponent,
    PyramidContentComponent,
    YesnoComponent,
    SingleSelectComponent,
    MultiSelectComponent,
    FeedbackQuestionComponent,
    ProgressSliderComponent,
    LikertScaleComponent,
    BeginSurveyComponent,
    ImageTextComponent,
    ImageAudioComponent,
    AudioElementComponent,
    IndexFooterComponent,
    FeedbackFooterComponent,
    ProgressSlider3Component,
    AudioCirclesComponent,
    FiveCirclesComponent,
    //NgxSocialShareModule
    SessionEndComponent,
    ModuleEndComponent,
    TxtOverlayTopComponent,
    EndHeaderComponent,
    FeatureHeaderComponent,
    ProgramContentComponent,
    AudioImageOverlayComponent,
    OnlySliderComponent,
    AudioBucketComponent,
    AudioBulletComponent,
    AudioDiagramComponent,
    TopnavComponent,
    TocHeaderComponent,
    TocTopnavComponent,
    TnHwpProjectComponent,
    RelatedWisdomStoriesTilesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxCircularPlayerModule,
    NgxSliderModule,
    RouterModule,
    ShareButtonsModule.withConfig({
      debug:true
     }),
    ShareIconsModule,
    NgCircleProgressModule.forRoot({
    "radius": 75,
    "space": -5,
    "outerStrokeWidth": 5,
    "outerStrokeColor": "#76C2AF",
    "innerStrokeColor": "#ffffff",
    "innerStrokeWidth": 5,
    "imageSrc": "",
    "imageHeight": 105,
    "imageWidth": 105,
    "showImage": true,
    "showBackground": false})  
  ],
  exports: [
    TnCrossComponent,
    TnEditBookmarkShareComponent,
    FtPrevNextComponent,
    FtPrevComponent,
    TnTranscriptListenComponent,
    BotnavComponent,
    TextComponent,
    ReflectionComponent,
    CourseHeaderComponent,
    CourseFooterComponent,
    QuotationComponent,    
    BottomNavigationComponent,
    IndexContentComponent,
    TapStartComponent,
    VideoContentComponent,
    SimpleTextComponent,
    LengthyTextComponent,
    OnelineTextComponent,
    KtaDoneComponent,
    KtaFooterComponent,
    KtaPrevnextComponent,
    SessionoverS1Component,
    SessionoverS2Component,
    AudioHeaderComponent,
    AudioContentComponent,
    TranscriptHeaderComponent,
    TranscriptContentComponent,
    PyramidContentComponent,
    YesnoComponent,
    SingleSelectComponent,
    MultiSelectComponent,
    FeedbackQuestionComponent,
    ProgressSliderComponent,
    LikertScaleComponent,
    BeginSurveyComponent,
    ImageTextComponent,
    ImageAudioComponent,
    AudioElementComponent,
    IndexFooterComponent,
    FeedbackFooterComponent,
    ProgressSlider3Component,
    AudioCirclesComponent,
    FiveCirclesComponent,
    SessionEndComponent,
    ModuleEndComponent,
    TxtOverlayTopComponent,
    EndHeaderComponent,
    FeatureHeaderComponent,
    ProgramContentComponent,
    AudioImageOverlayComponent,
    OnlySliderComponent,
    AudioBucketComponent,
    AudioBulletComponent,
    AudioDiagramComponent,
    TopnavComponent,
    TocHeaderComponent,
    TocTopnavComponent,
    TnHwpProjectComponent,
    RelatedWisdomStoriesTilesComponent
  ]
})
export class SharedModule { }
