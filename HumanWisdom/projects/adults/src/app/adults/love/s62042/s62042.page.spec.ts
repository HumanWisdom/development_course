import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62042Page } from './s62042.page';

describe('S62042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62042Page;
  let fixture: ComponentFixture<S62042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
