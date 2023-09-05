import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140095Page } from './s140095.page';

describe('S140095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140095Page;
  let fixture: ComponentFixture<S140095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
