import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25030Page } from './s25030.page';

describe('S25030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25030Page;
  let fixture: ComponentFixture<S25030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
