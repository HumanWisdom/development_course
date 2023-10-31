import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58064Page } from './s58064.page';

describe('S58064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58064Page;
  let fixture: ComponentFixture<S58064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
