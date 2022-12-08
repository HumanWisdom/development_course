import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49005Page } from './s49005.page';

describe('S49005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49005Page;
  let fixture: ComponentFixture<S49005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
