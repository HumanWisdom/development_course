import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132066Page } from './s132066.page';

describe('S132066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132066Page;
  let fixture: ComponentFixture<S132066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
