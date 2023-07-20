import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132147Page } from './s132147.page';

describe('S132147Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132147Page;
  let fixture: ComponentFixture<S132147Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132147Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132147Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
