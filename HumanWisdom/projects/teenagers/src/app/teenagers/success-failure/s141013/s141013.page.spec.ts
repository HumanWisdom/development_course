import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141013Page } from './s141013.page';

describe('S141013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141013Page;
  let fixture: ComponentFixture<S141013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
