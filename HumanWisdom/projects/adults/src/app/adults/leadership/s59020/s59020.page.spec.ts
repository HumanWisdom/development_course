import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59020Page } from './s59020.page';

describe('S59020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59020Page;
  let fixture: ComponentFixture<S59020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
