import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48078Page } from './s48078.page';

describe('S48078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48078Page;
  let fixture: ComponentFixture<S48078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
