import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48081Page } from './s48081.page';

describe('S48081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48081Page;
  let fixture: ComponentFixture<S48081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
