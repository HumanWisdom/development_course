import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73066Page } from './s73066.page';

describe('S73066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73066Page;
  let fixture: ComponentFixture<S73066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
