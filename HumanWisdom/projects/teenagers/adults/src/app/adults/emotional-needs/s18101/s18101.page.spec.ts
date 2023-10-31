import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18101Page } from './s18101.page';

describe('S18101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18101Page;
  let fixture: ComponentFixture<S18101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
