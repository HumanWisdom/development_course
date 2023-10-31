import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60066Page } from './s60066.page';

describe('S60066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60066Page;
  let fixture: ComponentFixture<S60066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
