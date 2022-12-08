import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60109Page } from './s60109.page';

describe('S60109Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60109Page;
  let fixture: ComponentFixture<S60109Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60109Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60109Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
