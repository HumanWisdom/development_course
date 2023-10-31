import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61030Page } from './s61030.page';

describe('S61030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61030Page;
  let fixture: ComponentFixture<S61030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
