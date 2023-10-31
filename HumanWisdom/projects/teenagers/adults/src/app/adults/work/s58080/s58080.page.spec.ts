import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58080Page } from './s58080.page';

describe('S58080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58080Page;
  let fixture: ComponentFixture<S58080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
