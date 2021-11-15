import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PodcastStartPage } from './podcast-start.page';

describe('PodcastStartPage', () => {
  let component: PodcastStartPage;
  let fixture: ComponentFixture<PodcastStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastStartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
