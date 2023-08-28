import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140057Page } from './s140057.page';

describe('S140057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140057Page;
  let fixture: ComponentFixture<S140057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
