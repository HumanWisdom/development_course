import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132064Page } from './s132064.page';

describe('S132064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132064Page;
  let fixture: ComponentFixture<S132064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
