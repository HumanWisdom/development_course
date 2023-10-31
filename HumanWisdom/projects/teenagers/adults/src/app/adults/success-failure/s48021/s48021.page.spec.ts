import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48021Page } from './s48021.page';

describe('S48021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48021Page;
  let fixture: ComponentFixture<S48021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
