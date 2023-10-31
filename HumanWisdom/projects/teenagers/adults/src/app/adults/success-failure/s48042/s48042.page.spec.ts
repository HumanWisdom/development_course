import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48042Page } from './s48042.page';

describe('S48042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48042Page;
  let fixture: ComponentFixture<S48042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
