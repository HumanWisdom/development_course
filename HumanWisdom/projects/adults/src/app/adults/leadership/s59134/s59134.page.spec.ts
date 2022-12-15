import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59134Page } from './s59134.page';

describe('S59134Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59134Page;
  let fixture: ComponentFixture<S59134Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59134Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59134Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
