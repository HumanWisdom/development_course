import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59041Page } from './s59041.page';

describe('S59041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59041Page;
  let fixture: ComponentFixture<S59041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
