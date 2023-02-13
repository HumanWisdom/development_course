import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxCircularPlayerModule } from 'ngx-circular-player';
import { FtPrevNextComponent } from '../shared/component/ft-prev-next/ft-prev-next.component';
import { FtPrevComponent } from '../shared/component/ft-prev/ft-prev.component';
import { TnEditBookmarkShareComponent } from '../shared/component/tn-edit-bookmark-share/tn-edit-bookmark-share.component';
import { TnTranscriptListenComponent } from '../shared/component/tn-transcript-listen/tn-transcript-listen.component';
import { AudioCirclesComponent } from './component/audio-circles/audio-circles.component';
import { AudioContentComponent } from './component/audio-content/audio-content.component';
import { AudioElementComponent } from './component/audio-element/audio-element.component';
import { AudioHeaderComponent } from './component/audio-header/audio-header.component';
import { BeginSurveyComponent } from './component/begin-survey/begin-survey.component';
import { BotnavComponent } from './component/botnav/botnav.component';
import { BottomNavigationComponent } from './component/bottom-navigation/bottom-navigation.component';
import { CourseFooterComponent } from './component/course-footer/course-footer.component';
import { CourseHeaderComponent } from './component/course-header/course-header.component';
import { FeedbackFooterComponent } from './component/feedback-footer/feedback-footer.component';
import { FeedbackQuestionComponent } from './component/feedback-question/feedback-question.component';
import { FiveCirclesComponent } from './component/five-circles/five-circles.component';
import { ImageAudioComponent } from './component/image-audio/image-audio.component';
import { ImageTextComponent } from './component/image-text/image-text.component';
import { IndexContentComponent } from './component/index-content/index-content.component';
import { IndexFooterComponent } from './component/index-footer/index-footer.component';
import { KtaDoneComponent } from './component/kta-done/kta-done.component';
import { KtaFooterComponent } from './component/kta-footer/kta-footer.component';
import { KtaPrevnextComponent } from './component/kta-prevnext/kta-prevnext.component';
import { LengthyTextComponent } from './component/lengthy-text/lengthy-text.component';
import { LikertScaleComponent } from './component/likert-scale/likert-scale.component';
import { MultiSelectComponent } from './component/multi-select/multi-select.component';
import { OnelineTextComponent } from './component/oneline-text/oneline-text.component';
import { ProgressSliderComponent } from './component/progress-slider/progress-slider.component';
import { ProgressSlider3Component } from './component/progress-slider3/progress-slider3.component';
import { PyramidContentComponent } from './component/pyramid-content/pyramid-content.component';
import { QuotationComponent } from './component/quotation/quotation.component';
import { ReflectionComponent } from './component/reflection/reflection.component';
import { RelatedWisdomStoriesTilesComponent } from './component/related-wisdom-stories-tiles/related-wisdom-stories-tiles.component';
import { SessionoverS1Component } from './component/sessionover-s1/sessionover-s1.component';
import { SessionoverS2Component } from './component/sessionover-s2/sessionover-s2.component';
import { SimpleTextComponent } from './component/simple-text/simple-text.component';
import { SingleAudioContentComponent } from './component/single-audio-content/single-audio-content.component';
import { SingleSelectComponent } from './component/single-select/single-select.component';
import { TapStartComponent } from './component/tap-start/tap-start.component';
import { TextComponent } from './component/text/text.component';
import { TnCrossComponent } from './component/tn-cross/tn-cross.component';
import { TranscriptContentComponent } from './component/transcript-content/transcript-content.component';
import { TranscriptHeaderComponent } from './component/transcript-header/transcript-header.component';
import { VideoContentComponent } from './component/video-content/video-content.component';
import { YesnoComponent } from './component/yesno/yesno.component';
//import { NgxSocialShareModule } from 'ngx-social-share';
import { PlatformModule } from '@angular/cdk/platform';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { TopnavComponent } from '../adults/src/app/onboarding/shared/component/topnav/topnav.component';
import { TocHeaderComponent } from '../shared/component/toc-header/toc-header.component';
import { TocTopnavComponent } from '../shared/component/toc-topnav/toc-topnav.component';
import { AudioBucketComponent } from './component/audio-bucket/audio-bucket.component';
import { AudioBulletComponent } from './component/audio-bullet/audio-bullet.component';
import { AudioDiagramComponent } from './component/audio-diagram/audio-diagram.component';
import { AudioImageOverlayComponent } from './component/audio-image-overlay/audio-image-overlay.component';
import { AudioPlayerComponent } from './component/audio-player/audio-player.component';
import { EndHeaderComponent } from './component/end-header/end-header.component';
import { FeatureHeaderComponent } from './component/feature-header/feature-header.component';
import { HamburgerComponent } from './component/hamburger/hamburger.component';
import { JournalWeComponent } from './component/journal-we/journal-we.component';
import { ModuleEndVideosComponent } from './component/module-end-videos/module-end-videos.component';
import { ModuleEndComponent } from './component/module-end/module-end.component';
import { OnlySliderComponent } from './component/only-slider/only-slider.component';
import { ProgramContentComponent } from './component/program-content/program-content.component';
import { S3VideoComponent } from './component/s3-video/s3-video.component';
import { SessionEndComponent } from './component/session-end/session-end.component';
import { TnCloseComponent } from './component/tn-close/tn-close.component';
import { TnDashboardV03Component } from './component/tn-dashboard-v03/tn-dashboard-v03.component';
import { TnHwpProjectComponent } from './component/tn-hwp-project/tn-hwp-project.component';
import { TnPartnershipAppComponent } from './component/tn-partnership-app/tn-partnership-app.component';
import { TxtOverlayTopComponent } from './component/txt-overlay-top/txt-overlay-top.component';
import { YoutubeContentComponent } from './component/youtube-content/youtube-content.component';
import { FtWisdomExerciseComponent } from './component/ft-wisdom-exercise/ft-wisdom-exercise.component';
import { FtAdvertComponent } from './component/ft-advert/ft-advert.component';
import { TnAdvertComponent } from './component/tn-advert/tn-advert.component';
import { NewsletterComponent } from './component/newsletter/newsletter.component';
import { BgVideoComponent } from './component/bg-video/bg-video.component';
import { VideoYoutubeComponent } from './component/video-youtube/video-youtube.component';
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
    RelatedWisdomStoriesTilesComponent,
    ModuleEndVideosComponent,
    TnDashboardV03Component,
    HamburgerComponent,
    TnCloseComponent,
    YoutubeContentComponent,
    SingleAudioContentComponent,
    S3VideoComponent,
    AudioPlayerComponent,
    TnPartnershipAppComponent,
    JournalWeComponent,
    FtWisdomExerciseComponent,
    FtAdvertComponent,
    TnAdvertComponent,
    NewsletterComponent,
    BgVideoComponent,
    VideoYoutubeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxCircularPlayerModule,
    NgxSliderModule,
    RouterModule,
    PlatformModule,
    ShareButtonsModule.withConfig({
      debug: true
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
      "showBackground": false
    })
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
    RelatedWisdomStoriesTilesComponent,
    ModuleEndVideosComponent,
    TnDashboardV03Component,
    HamburgerComponent,
    TnCloseComponent,
    YoutubeContentComponent,
    SingleAudioContentComponent,
    S3VideoComponent,
    AudioPlayerComponent,
    TnPartnershipAppComponent,
    JournalWeComponent,
    FtWisdomExerciseComponent,
    FtAdvertComponent,
    TnAdvertComponent,
    NewsletterComponent,
    BgVideoComponent,
    VideoYoutubeComponent,
  ]
})
export class SharedModule { }
