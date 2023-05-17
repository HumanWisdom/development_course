import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116097Page } from './s116097.page';

describe('S116097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116097Page;
  let fixture: ComponentFixture<S116097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
