import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59078Page } from './s59078.page';

describe('S59078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59078Page;
  let fixture: ComponentFixture<S59078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
