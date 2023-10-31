import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59082Page } from './s59082.page';

describe('S59082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59082Page;
  let fixture: ComponentFixture<S59082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
