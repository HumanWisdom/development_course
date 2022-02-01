import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachBioPage } from './coach-bio.page';

describe('CoachBioPage', () => {
  let component: CoachBioPage;
  let fixture: ComponentFixture<CoachBioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachBioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachBioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
