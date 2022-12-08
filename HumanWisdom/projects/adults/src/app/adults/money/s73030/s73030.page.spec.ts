import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73030Page } from './s73030.page';

describe('S73030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73030Page;
  let fixture: ComponentFixture<S73030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
