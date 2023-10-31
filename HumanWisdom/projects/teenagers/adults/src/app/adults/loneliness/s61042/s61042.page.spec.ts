import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61042Page } from './s61042.page';

describe('S61042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61042Page;
  let fixture: ComponentFixture<S61042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
