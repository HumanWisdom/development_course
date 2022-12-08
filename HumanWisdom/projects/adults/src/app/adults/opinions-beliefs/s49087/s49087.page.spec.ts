import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49087Page } from './s49087.page';

describe('S49087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49087Page;
  let fixture: ComponentFixture<S49087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
