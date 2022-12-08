import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48033Page } from './s48033.page';

describe('S48033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48033Page;
  let fixture: ComponentFixture<S48033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
