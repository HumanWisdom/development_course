import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48080Page } from './s48080.page';

describe('S48080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48080Page;
  let fixture: ComponentFixture<S48080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
