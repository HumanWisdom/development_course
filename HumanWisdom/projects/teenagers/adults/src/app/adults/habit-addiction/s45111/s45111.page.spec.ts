import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45111Page } from './s45111.page';

describe('S45111Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45111Page;
  let fixture: ComponentFixture<S45111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45111Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
