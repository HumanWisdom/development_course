import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57064Page } from './s57064.page';

describe('S57064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57064Page;
  let fixture: ComponentFixture<S57064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
