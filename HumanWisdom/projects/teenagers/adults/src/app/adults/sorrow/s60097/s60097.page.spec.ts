import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60097Page } from './s60097.page';

describe('S60097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60097Page;
  let fixture: ComponentFixture<S60097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
