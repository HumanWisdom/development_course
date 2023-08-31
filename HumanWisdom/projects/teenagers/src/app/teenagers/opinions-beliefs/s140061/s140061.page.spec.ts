import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140061Page } from './s140061.page';

describe('S140061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140061Page;
  let fixture: ComponentFixture<S140061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
