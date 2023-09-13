import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141109Page } from './s141109.page';

describe('S141109Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141109Page;
  let fixture: ComponentFixture<S141109Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141109Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141109Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
