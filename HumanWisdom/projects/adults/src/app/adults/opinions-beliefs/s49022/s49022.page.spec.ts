import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49022Page } from './s49022.page';

describe('S49022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49022Page;
  let fixture: ComponentFixture<S49022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
