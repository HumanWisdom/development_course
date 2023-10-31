import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61078Page } from './s61078.page';

describe('S61078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61078Page;
  let fixture: ComponentFixture<S61078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
