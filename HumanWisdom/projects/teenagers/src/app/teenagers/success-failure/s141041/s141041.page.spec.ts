import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141041Page } from './s141041.page';

describe('S141041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141041Page;
  let fixture: ComponentFixture<S141041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
