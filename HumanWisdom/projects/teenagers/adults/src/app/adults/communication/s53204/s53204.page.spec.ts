import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53204Page } from './s53204.page';

describe('S53204Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53204Page;
  let fixture: ComponentFixture<S53204Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53204Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53204Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
