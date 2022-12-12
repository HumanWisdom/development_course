import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59097Page } from './s59097.page';

describe('S59097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59097Page;
  let fixture: ComponentFixture<S59097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
