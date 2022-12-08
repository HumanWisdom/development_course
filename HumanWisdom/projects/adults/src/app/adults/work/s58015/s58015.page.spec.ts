import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58015Page } from './s58015.page';

describe('S58015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58015Page;
  let fixture: ComponentFixture<S58015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
