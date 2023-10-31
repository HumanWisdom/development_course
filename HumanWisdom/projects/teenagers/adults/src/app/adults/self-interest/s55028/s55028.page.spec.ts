import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55028Page } from './s55028.page';

describe('S55028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55028Page;
  let fixture: ComponentFixture<S55028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
