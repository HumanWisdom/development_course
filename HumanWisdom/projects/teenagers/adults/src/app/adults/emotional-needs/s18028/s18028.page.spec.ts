import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18028Page } from './s18028.page';

describe('S18028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18028Page;
  let fixture: ComponentFixture<S18028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
