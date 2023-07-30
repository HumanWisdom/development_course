import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134078Page } from './s134078.page';

describe('S134078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134078Page;
  let fixture: ComponentFixture<S134078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
