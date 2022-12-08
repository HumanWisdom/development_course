import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48014Page } from './s48014.page';

describe('S48014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48014Page;
  let fixture: ComponentFixture<S48014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
