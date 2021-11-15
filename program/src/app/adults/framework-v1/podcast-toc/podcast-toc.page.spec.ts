import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PodcastTocPage } from './podcast-toc.page';

describe('PodcastTocPage', () => {
  let component: PodcastTocPage;
  let fixture: ComponentFixture<PodcastTocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastTocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastTocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
