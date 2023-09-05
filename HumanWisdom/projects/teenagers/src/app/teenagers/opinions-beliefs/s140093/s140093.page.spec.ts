import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140093Page } from './s140093.page';

describe('S140093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140093Page;
  let fixture: ComponentFixture<S140093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
