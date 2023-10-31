import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49079Page } from './s49079.page';

describe('S49079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49079Page;
  let fixture: ComponentFixture<S49079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
