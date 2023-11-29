import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140042Page } from './s140042.page';

describe('S140042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140042Page;
  let fixture: ComponentFixture<S140042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
