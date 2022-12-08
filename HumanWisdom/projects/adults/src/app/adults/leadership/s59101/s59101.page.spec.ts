import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59101Page } from './s59101.page';

describe('S59101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59101Page;
  let fixture: ComponentFixture<S59101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
