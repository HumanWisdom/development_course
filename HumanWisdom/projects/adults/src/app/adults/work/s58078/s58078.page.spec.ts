import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58078Page } from './s58078.page';

describe('S58078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58078Page;
  let fixture: ComponentFixture<S58078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
