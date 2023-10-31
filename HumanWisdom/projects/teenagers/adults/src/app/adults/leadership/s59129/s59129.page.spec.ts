import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59129Page } from './s59129.page';

describe('S59129Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59129Page;
  let fixture: ComponentFixture<S59129Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59129Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59129Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
