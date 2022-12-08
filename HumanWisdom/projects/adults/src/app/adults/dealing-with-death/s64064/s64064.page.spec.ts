import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64064Page } from './s64064.page';

describe('S64064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64064Page;
  let fixture: ComponentFixture<S64064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
