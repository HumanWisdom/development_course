import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59048Page } from './s59048.page';

describe('S59048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59048Page;
  let fixture: ComponentFixture<S59048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
