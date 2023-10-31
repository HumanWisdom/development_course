import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73064Page } from './s73064.page';

describe('S73064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73064Page;
  let fixture: ComponentFixture<S73064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
