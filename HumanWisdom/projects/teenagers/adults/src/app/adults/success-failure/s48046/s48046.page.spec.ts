import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48046Page } from './s48046.page';

describe('S48046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48046Page;
  let fixture: ComponentFixture<S48046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
