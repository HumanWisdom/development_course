import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73078Page } from './s73078.page';

describe('S73078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73078Page;
  let fixture: ComponentFixture<S73078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
