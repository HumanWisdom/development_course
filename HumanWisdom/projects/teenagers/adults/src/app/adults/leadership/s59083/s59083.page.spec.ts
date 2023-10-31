import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59083Page } from './s59083.page';

describe('S59083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59083Page;
  let fixture: ComponentFixture<S59083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
