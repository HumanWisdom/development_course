import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45079Page } from './s45079.page';

describe('S45079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45079Page;
  let fixture: ComponentFixture<S45079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
