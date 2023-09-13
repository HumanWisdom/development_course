import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140008Page } from './s140008.page';

describe('S140008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140008Page;
  let fixture: ComponentFixture<S140008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
