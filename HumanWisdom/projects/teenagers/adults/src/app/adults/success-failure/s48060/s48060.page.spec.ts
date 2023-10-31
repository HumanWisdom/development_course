import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48060Page } from './s48060.page';

describe('S48060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48060Page;
  let fixture: ComponentFixture<S48060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
