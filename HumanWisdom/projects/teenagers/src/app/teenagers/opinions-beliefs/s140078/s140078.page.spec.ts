import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140078Page } from './s140078.page';

describe('S140078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140078Page;
  let fixture: ComponentFixture<S140078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
