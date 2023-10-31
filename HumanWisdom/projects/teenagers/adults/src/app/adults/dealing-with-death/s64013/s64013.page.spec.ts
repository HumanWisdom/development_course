import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64013Page } from './s64013.page';

describe('S64013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64013Page;
  let fixture: ComponentFixture<S64013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
