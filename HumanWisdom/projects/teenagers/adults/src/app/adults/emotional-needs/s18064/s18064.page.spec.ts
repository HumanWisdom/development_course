import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18064Page } from './s18064.page';

describe('S18064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18064Page;
  let fixture: ComponentFixture<S18064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
