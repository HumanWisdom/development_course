import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45078Page } from './s45078.page';

describe('S45078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45078Page;
  let fixture: ComponentFixture<S45078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
