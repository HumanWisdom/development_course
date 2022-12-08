import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61064Page } from './s61064.page';

describe('S61064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61064Page;
  let fixture: ComponentFixture<S61064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
