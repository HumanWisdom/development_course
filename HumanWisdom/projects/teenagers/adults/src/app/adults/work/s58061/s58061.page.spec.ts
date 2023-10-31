import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58061Page } from './s58061.page';

describe('S58061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58061Page;
  let fixture: ComponentFixture<S58061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
