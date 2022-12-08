import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59115Page } from './s59115.page';

describe('S59115Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59115Page;
  let fixture: ComponentFixture<S59115Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59115Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59115Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
