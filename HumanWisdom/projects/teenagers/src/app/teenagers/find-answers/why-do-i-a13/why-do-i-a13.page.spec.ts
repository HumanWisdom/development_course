import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhyDoIA13Page } from './why-do-i-a13.page';

describe('WhyDoIA13Page', () => {
  let component: WhyDoIA13Page;
  let fixture: ComponentFixture<WhyDoIA13Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyDoIA13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhyDoIA13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
