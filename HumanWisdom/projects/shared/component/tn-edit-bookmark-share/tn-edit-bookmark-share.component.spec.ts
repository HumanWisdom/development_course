import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TnEditBookmarkShareComponent } from './tn-edit-bookmark-share.component';

describe('TnEditBookmarkShareComponent', () => {
  let component: TnEditBookmarkShareComponent;
  let fixture: ComponentFixture<TnEditBookmarkShareComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TnEditBookmarkShareComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TnEditBookmarkShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
