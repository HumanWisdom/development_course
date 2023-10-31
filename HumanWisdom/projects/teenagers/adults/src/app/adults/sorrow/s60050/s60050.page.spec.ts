import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60050Page } from './s60050.page';

describe('S60050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60050Page;
  let fixture: ComponentFixture<S60050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
