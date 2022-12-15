import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59061Page } from './s59061.page';

describe('S59061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59061Page;
  let fixture: ComponentFixture<S59061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
