import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63078Page } from './s63078.page';

describe('S63078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63078Page;
  let fixture: ComponentFixture<S63078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
