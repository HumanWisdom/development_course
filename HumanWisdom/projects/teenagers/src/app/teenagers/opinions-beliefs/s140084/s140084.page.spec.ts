import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140084Page } from './s140084.page';

describe('S140084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140084Page;
  let fixture: ComponentFixture<S140084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
