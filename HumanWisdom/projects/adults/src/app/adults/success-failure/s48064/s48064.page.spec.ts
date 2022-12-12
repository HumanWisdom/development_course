import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48064Page } from './s48064.page';

describe('S48064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48064Page;
  let fixture: ComponentFixture<S48064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
