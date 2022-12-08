import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73107Page } from './s73107.page';

describe('S73107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73107Page;
  let fixture: ComponentFixture<S73107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
