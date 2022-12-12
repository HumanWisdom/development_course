import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48054Page } from './s48054.page';

describe('S48054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48054Page;
  let fixture: ComponentFixture<S48054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
