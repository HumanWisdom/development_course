import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60012Page } from './s60012.page';

describe('S60012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60012Page;
  let fixture: ComponentFixture<S60012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
