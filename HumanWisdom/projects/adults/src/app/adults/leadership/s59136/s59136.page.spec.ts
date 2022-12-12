import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59136Page } from './s59136.page';

describe('S59136Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59136Page;
  let fixture: ComponentFixture<S59136Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59136Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59136Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
