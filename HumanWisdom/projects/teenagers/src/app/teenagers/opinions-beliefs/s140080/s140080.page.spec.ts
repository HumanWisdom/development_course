import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140080Page } from './s140080.page';

describe('S140080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140080Page;
  let fixture: ComponentFixture<S140080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
