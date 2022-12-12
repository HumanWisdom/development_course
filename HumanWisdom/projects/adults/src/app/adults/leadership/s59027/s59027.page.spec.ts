import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59027Page } from './s59027.page';

describe('S59027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59027Page;
  let fixture: ComponentFixture<S59027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
