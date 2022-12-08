import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59105Page } from './s59105.page';

describe('S59105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59105Page;
  let fixture: ComponentFixture<S59105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
