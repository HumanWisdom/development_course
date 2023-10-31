import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48029Page } from './s48029.page';

describe('S48029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48029Page;
  let fixture: ComponentFixture<S48029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
