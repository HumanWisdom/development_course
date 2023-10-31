import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18095Page } from './s18095.page';

describe('S18095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18095Page;
  let fixture: ComponentFixture<S18095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
