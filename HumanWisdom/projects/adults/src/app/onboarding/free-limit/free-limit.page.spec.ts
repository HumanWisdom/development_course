import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreeLimitPage } from './free-limit.page';

describe('FreeLimitPage', () => {
  let component: FreeLimitPage;
  let fixture: ComponentFixture<FreeLimitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeLimitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreeLimitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
