import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59050Page } from './s59050.page';

describe('S59050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59050Page;
  let fixture: ComponentFixture<S59050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
