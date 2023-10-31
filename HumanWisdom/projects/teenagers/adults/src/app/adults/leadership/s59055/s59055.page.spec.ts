import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59055Page } from './s59055.page';

describe('S59055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59055Page;
  let fixture: ComponentFixture<S59055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
