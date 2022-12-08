import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53078Page } from './s53078.page';

describe('S53078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53078Page;
  let fixture: ComponentFixture<S53078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
