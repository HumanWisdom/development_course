import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59053Page } from './s59053.page';

describe('S59053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59053Page;
  let fixture: ComponentFixture<S59053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
