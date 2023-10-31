import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59116Page } from './s59116.page';

describe('S59116Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59116Page;
  let fixture: ComponentFixture<S59116Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59116Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59116Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
