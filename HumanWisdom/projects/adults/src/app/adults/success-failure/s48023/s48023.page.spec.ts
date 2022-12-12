import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48023Page } from './s48023.page';

describe('S48023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48023Page;
  let fixture: ComponentFixture<S48023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
