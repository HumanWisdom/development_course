import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73079Page } from './s73079.page';

describe('S73079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73079Page;
  let fixture: ComponentFixture<S73079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
