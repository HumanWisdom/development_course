import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60064Page } from './s60064.page';

describe('S60064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60064Page;
  let fixture: ComponentFixture<S60064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
