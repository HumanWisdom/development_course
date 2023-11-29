import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140033Page } from './s140033.page';

describe('S140033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140033Page;
  let fixture: ComponentFixture<S140033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
