import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59057Page } from './s59057.page';

describe('S59057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59057Page;
  let fixture: ComponentFixture<S59057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
