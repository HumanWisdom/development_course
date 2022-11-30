import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49078Page } from './s49078.page';

describe('S49078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49078Page;
  let fixture: ComponentFixture<S49078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
