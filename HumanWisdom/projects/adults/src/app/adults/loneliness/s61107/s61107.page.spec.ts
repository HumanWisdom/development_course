import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61107Page } from './s61107.page';

describe('S61107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61107Page;
  let fixture: ComponentFixture<S61107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
