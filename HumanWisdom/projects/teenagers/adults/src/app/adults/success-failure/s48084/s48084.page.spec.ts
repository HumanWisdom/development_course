import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48084Page } from './s48084.page';

describe('S48084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48084Page;
  let fixture: ComponentFixture<S48084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
