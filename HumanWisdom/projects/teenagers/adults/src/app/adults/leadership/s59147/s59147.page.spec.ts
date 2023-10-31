import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59147Page } from './s59147.page';

describe('S59147Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59147Page;
  let fixture: ComponentFixture<S59147Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59147Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59147Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
