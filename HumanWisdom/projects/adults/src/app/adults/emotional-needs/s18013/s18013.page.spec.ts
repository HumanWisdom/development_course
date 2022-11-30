import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18013Page } from './s18013.page';

describe('S18013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18013Page;
  let fixture: ComponentFixture<S18013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
