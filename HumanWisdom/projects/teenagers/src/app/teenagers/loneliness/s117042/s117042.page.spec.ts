import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117042Page } from './s117042.page';

describe('S117042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117042Page;
  let fixture: ComponentFixture<S117042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
