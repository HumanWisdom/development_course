import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28013Page } from './s28013.page';

describe('S28013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28013Page;
  let fixture: ComponentFixture<S28013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
