import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141078Page } from './s141078.page';

describe('S141078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141078Page;
  let fixture: ComponentFixture<S141078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
