import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59042Page } from './s59042.page';

describe('S59042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59042Page;
  let fixture: ComponentFixture<S59042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
