import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140077Page } from './s140077.page';

describe('S140077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140077Page;
  let fixture: ComponentFixture<S140077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
