import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141107Page } from './s141107.page';

describe('S141107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141107Page;
  let fixture: ComponentFixture<S141107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
