import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61095Page } from './s61095.page';

describe('S61095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61095Page;
  let fixture: ComponentFixture<S61095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
