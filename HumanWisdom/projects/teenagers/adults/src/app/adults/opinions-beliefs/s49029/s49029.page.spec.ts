import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49029Page } from './s49029.page';

describe('S49029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49029Page;
  let fixture: ComponentFixture<S49029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
