import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachDirectoryFilterPage } from './coach-directory-filter.page';

describe('CoachDirectoryFilterPage', () => {
  let component: CoachDirectoryFilterPage;
  let fixture: ComponentFixture<CoachDirectoryFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachDirectoryFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachDirectoryFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
