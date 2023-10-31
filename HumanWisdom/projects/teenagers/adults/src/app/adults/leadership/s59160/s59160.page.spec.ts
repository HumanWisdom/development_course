import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59160Page } from './s59160.page';

describe('S59160Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59160Page;
  let fixture: ComponentFixture<S59160Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59160Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59160Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
