import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63041Page } from './s63041.page';

describe('S63041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63041Page;
  let fixture: ComponentFixture<S63041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
