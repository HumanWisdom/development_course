import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73084Page } from './s73084.page';

describe('S73084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73084Page;
  let fixture: ComponentFixture<S73084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
