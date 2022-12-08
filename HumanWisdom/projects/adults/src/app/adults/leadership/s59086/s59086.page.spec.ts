import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59086Page } from './s59086.page';

describe('S59086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59086Page;
  let fixture: ComponentFixture<S59086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
