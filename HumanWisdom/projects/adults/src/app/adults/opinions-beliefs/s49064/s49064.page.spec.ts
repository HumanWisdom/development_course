import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49064Page } from './s49064.page';

describe('S49064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49064Page;
  let fixture: ComponentFixture<S49064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
