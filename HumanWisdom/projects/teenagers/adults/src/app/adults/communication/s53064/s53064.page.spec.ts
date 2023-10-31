import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53064Page } from './s53064.page';

describe('S53064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53064Page;
  let fixture: ComponentFixture<S53064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
