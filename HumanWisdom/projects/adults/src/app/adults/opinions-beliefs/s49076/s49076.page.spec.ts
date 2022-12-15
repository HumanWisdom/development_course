import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49076Page } from './s49076.page';

describe('S49076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49076Page;
  let fixture: ComponentFixture<S49076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
