import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49080Page } from './s49080.page';

describe('S49080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49080Page;
  let fixture: ComponentFixture<S49080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
