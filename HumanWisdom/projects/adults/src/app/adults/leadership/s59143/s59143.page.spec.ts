import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59143Page } from './s59143.page';

describe('S59143Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59143Page;
  let fixture: ComponentFixture<S59143Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59143Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59143Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
