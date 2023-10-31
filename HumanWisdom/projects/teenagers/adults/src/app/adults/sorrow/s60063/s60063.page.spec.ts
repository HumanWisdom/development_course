import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60063Page } from './s60063.page';

describe('S60063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60063Page;
  let fixture: ComponentFixture<S60063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
