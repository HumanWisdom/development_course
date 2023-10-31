import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49065Page } from './s49065.page';

describe('S49065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49065Page;
  let fixture: ComponentFixture<S49065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
