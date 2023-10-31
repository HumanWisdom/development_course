import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48013Page } from './s48013.page';

describe('S48013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48013Page;
  let fixture: ComponentFixture<S48013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
