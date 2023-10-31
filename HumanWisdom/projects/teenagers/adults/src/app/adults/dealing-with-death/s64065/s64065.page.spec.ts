import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64065Page } from './s64065.page';

describe('S64065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64065Page;
  let fixture: ComponentFixture<S64065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
