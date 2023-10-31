import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48044Page } from './s48044.page';

describe('S48044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48044Page;
  let fixture: ComponentFixture<S48044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
