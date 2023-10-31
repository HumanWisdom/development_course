import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59131Page } from './s59131.page';

describe('S59131Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59131Page;
  let fixture: ComponentFixture<S59131Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59131Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59131Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
