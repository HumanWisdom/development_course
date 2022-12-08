import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59066Page } from './s59066.page';

describe('S59066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59066Page;
  let fixture: ComponentFixture<S59066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
