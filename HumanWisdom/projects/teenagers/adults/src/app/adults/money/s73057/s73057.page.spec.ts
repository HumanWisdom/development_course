import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73057Page } from './s73057.page';

describe('S73057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73057Page;
  let fixture: ComponentFixture<S73057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
