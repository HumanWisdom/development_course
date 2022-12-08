import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59171Page } from './s59171.page';

describe('S59171Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59171Page;
  let fixture: ComponentFixture<S59171Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59171Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59171Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
