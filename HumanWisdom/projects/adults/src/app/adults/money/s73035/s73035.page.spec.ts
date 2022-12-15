import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73035Page } from './s73035.page';

describe('S73035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73035Page;
  let fixture: ComponentFixture<S73035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
