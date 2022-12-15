import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18042Page } from './s18042.page';

describe('S18042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18042Page;
  let fixture: ComponentFixture<S18042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
