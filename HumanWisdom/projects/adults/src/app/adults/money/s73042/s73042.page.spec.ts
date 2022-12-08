import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73042Page } from './s73042.page';

describe('S73042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73042Page;
  let fixture: ComponentFixture<S73042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
