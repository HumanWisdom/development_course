import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18030Page } from './s18030.page';

describe('S18030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18030Page;
  let fixture: ComponentFixture<S18030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
