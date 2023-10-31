import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48107Page } from './s48107.page';

describe('S48107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48107Page;
  let fixture: ComponentFixture<S48107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
