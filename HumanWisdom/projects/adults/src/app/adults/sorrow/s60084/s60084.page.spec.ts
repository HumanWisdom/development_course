import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60084Page } from './s60084.page';

describe('S60084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60084Page;
  let fixture: ComponentFixture<S60084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
