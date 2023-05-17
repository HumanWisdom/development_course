import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116064Page } from './s116064.page';

describe('S116064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116064Page;
  let fixture: ComponentFixture<S116064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
