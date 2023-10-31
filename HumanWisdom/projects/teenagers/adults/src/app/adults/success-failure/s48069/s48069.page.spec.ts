import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48069Page } from './s48069.page';

describe('S48069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48069Page;
  let fixture: ComponentFixture<S48069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
