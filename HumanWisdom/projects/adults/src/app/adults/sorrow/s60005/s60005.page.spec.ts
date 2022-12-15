import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60005Page } from './s60005.page';

describe('S60005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60005Page;
  let fixture: ComponentFixture<S60005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
