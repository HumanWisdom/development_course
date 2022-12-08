import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45042Page } from './s45042.page';

describe('S45042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45042Page;
  let fixture: ComponentFixture<S45042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
