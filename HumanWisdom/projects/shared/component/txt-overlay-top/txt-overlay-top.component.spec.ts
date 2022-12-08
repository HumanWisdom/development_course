import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TxtOverlayTopComponent } from './txt-overlay-top.component';

describe('TxtOverlayTopComponent', () => {
  let component: TxtOverlayTopComponent;
  let fixture: ComponentFixture<TxtOverlayTopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtOverlayTopComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TxtOverlayTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
