import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46078Page } from './s46078.page';

describe('S46078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46078Page;
  let fixture: ComponentFixture<S46078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
