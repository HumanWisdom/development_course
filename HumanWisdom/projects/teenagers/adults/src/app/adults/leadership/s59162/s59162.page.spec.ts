import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59162Page } from './s59162.page';

describe('S59162Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59162Page;
  let fixture: ComponentFixture<S59162Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59162Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59162Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
