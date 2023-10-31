import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62064Page } from './s62064.page';

describe('S62064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62064Page;
  let fixture: ComponentFixture<S62064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
