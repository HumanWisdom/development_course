import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TocResumePage } from './toc-resume.page';

describe('TocResumePage', () => {
  let component: TocResumePage;
  let fixture: ComponentFixture<TocResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocResumePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TocResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
