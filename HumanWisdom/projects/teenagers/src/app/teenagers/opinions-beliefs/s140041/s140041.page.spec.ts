import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140041Page } from './s140041.page';

describe('S140041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140041Page;
  let fixture: ComponentFixture<S140041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
