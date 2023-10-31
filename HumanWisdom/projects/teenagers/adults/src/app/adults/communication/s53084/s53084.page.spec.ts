import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53084Page } from './s53084.page';

describe('S53084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53084Page;
  let fixture: ComponentFixture<S53084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
