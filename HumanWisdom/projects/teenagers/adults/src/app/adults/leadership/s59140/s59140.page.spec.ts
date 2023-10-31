import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59140Page } from './s59140.page';

describe('S59140Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59140Page;
  let fixture: ComponentFixture<S59140Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59140Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59140Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
