import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116087Page } from './s116087.page';

describe('S116087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116087Page;
  let fixture: ComponentFixture<S116087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
