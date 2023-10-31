import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18053Page } from './s18053.page';

describe('S18053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18053Page;
  let fixture: ComponentFixture<S18053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
