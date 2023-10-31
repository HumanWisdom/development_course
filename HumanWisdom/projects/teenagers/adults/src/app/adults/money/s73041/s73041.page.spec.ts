import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73041Page } from './s73041.page';

describe('S73041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73041Page;
  let fixture: ComponentFixture<S73041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
