import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59037Page } from './s59037.page';

describe('S59037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59037Page;
  let fixture: ComponentFixture<S59037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
