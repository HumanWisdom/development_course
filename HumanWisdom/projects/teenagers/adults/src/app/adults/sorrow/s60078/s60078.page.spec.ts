import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60078Page } from './s60078.page';

describe('S60078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60078Page;
  let fixture: ComponentFixture<S60078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
