import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60107Page } from './s60107.page';

describe('S60107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60107Page;
  let fixture: ComponentFixture<S60107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
